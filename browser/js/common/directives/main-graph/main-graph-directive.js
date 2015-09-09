app.directive('mainGraph', function () {
    return {
      restrict: 'E',
      scope: {
      	stockdata: '=',
      	trenddata: '='
      },
      templateUrl: 'js/common/directives/main-graph/main-graph.html',
      controller: 'homeDataCtrl',
      link: function (scope, element, attrs) {
//------- SVG DIMENSIONS, SCALES, AXES ---------
			var margin = 20;
			var width = 850-(2*margin);
			var height = 500-(2*margin);
			var xScale = d3.time.scale()
			    .domain( [new Date(scope.stockdata[scope.stockdata.length - 1].Date), 
                    new Date(scope.stockdata[0].Date)] )
			    .range([0, width]);
			var yScale = d3.scale.linear()
			    .domain( [ .95*d3.min(scope.stockdata, function(d) { return d.Close; }), 
                    1.05*d3.max(scope.stockdata, function(d) { return d.Close; })] )
			    .range([height, 0])
			    .nice();
      var colorScale = d3.scale.ordinal()
          .range(["#98abc5", "#8a89a6", "#6b486b", "#a05d56", "#d0743c"]);

			var xAxis = d3.svg.axis()
                          .scale(xScale)
                          .tickSize(-height)
                          .tickSubdivide(true)
                          .orient('bottom');
      var yAxis = d3.svg.axis()
                          .scale(yScale)
                          .ticks(5)
                          .orient("left");
      var svg = d3.select('svg')
                    	.attr("width", width+(4*margin))
                		  .attr("height", height+(4*margin));
      var graphBackground = svg.append('rect')
                                .attr('class', 'graphBackground')
                                .attr("width", width)
                                .attr("height", height)
                                .attr('transform', "translate("+ (2*margin)+"," + (2*margin) + ")")
                                .attr('opacity', ".5");
      svg.append("text")
        .attr("x", (width / 2))             
        .attr("y",  (margin))
        .attr("text-anchor", "middle")  
        .style("font-size", "24px") 
        .text("Stock Price vs Google Searches");
      svg.append('g')
      	.attr('class', "x axis")
      	.attr('stroke', 'black')
      	.attr("transform", "translate(0," + (height+(2*margin)) + ")")
      	.call(xAxis)
      svg.append('g')
      	.attr('class', "y axis stock")
      	.attr('stroke', 'black')
        .attr("transform", "translate("+ (2*margin)+"," + (2*margin) + ")")
        .call(yAxis)
                       	
//------- GOOGLE TREND BARS ON GRAPH (INITIALLY) -----------
      var xTrendScale = d3.time.scale()
          .domain( [ new Date(scope.trenddata[0][0].v), 
                     new Date(scope.trenddata[scope.trenddata.length - 1][0].v)] )
          .range([0, width-margin]);
      var yTrendScale = d3.scale.linear()
          .domain( [ d3.min(scope.trenddata, function(d) { return d[3]; }), 
                     d3.max(scope.trenddata, function(d) { return d[3]; })] )
          .range([height, 0])
          .nice();
      var yAxisTrend = d3.svg.axis()
                          .scale(yTrendScale)
                          .ticks(5)
                          .orient("right");
      svg.append('g')
          .attr('class', "y axis trend")
          .attr('stroke', 'black')
          .attr("transform", "translate("+width+(2*margin)+","+(2*margin)+")")
          .call(yAxisTrend) 
      svg.selectAll("rect")
          .data(scope.trenddata)
          .enter()
          .append("rect")
          .attr('class','bar')
          .attr("x", function(d, i) { return xTrendScale(new Date(d[0].v)); })
          .attr("y", function(d) { return height - yTrendScale(d[3]); })
          .attr("width", function(d){ return (-20+width-2*margin)/scope.trenddata.length })
          .attr("height", function(d) { return yTrendScale(d[3]); })
          .attr("transform", "translate("+(margin)+","+(2*margin)+")")
          .attr('opacity', ".65"); 
//------- LINE ON GRAPH (INITIALLY) ----------------------
      var makeLine = d3.svg.line()
          .x(function(d) { return xScale(new Date(d.Date)); })
        	.y(function(d) { return yScale(d.Close); })
        	.interpolate('linear');
    	var priceLine = svg.append("path")
		                     .attr("class", "line")
                  			 .attr('fill', 'none')
                  			 .attr('stroke-width', 3)
                         .attr('stroke', "#77876B")
                  			 .attr("d", makeLine(scope.stockdata))
                         .attr("transform", "translate("+2*margin+","+(2*margin)+")");
//-------- CHANGE GRAPH FOR NEW STOCK DATA -----------            
      var changeStockLine = function(){
        xScale.domain([ new Date(scope.stockdata[scope.stockdata.length - 1].Date), 
                        new Date(scope.stockdata[0].Date)] );
        yScale.domain([ .95*d3.min(scope.stockdata, function(d) { return d.Close; }), 
                        1.05*d3.max(scope.stockdata, function(d) { return d.Close; })] );
// new stock price line
      var newLine = svg.selectAll('path.line')
      				        .data(scope.stockdata);
      newLine.exit().remove();
      newLine.enter().append('line');
		  newLine.transition()
			       .duration(2000)
          	 .delay(function(d,i){ return i*10 })
          	 .attr('d', makeLine(scope.stockdata));
// new X axis
     	var newX = svg.selectAll(".x.axis")
     					.data(scope.stockdata);  
     	newX.attr('class', "x axis")
    	     .attr("transform", "translate("+ 2*margin+"," + (height+(2*margin)) + ")")
    	     .call(xAxis); 
      newX.transition()
          .duration(2000); 
// new Y axis
			var newY = svg.selectAll(".y.axis.stock")
							.data(scope.stockdata);
  			newY.attr('class', "y axis stock")
             	    .call(yAxis);
  			newY.transition()
  				.duration(2000);
	    }
// ---------- CHANGE BARS FOR NEW TREND DATA ------
var changeBars = function(){
      xTrendScale.domain( [ new Date(scope.trenddata[0][0].v), 
                            new Date(scope.trenddata[scope.trenddata.length - 1][0].v)] )
      // yTrendScale.domain( [ d3.min(scope.trenddata, function(d) { return d[3]; }), 
      //                       d3.max(scope.trenddata, function(d) { return d[3]; })] )
//to support multiple keywords
      yTrendScale.domain( [ 
        d3.min(scope.trenddata, function(d) { 
          var sumMin = 0;
          d.forEach(function(el){
                      if(typeof(el)=='number'){ sumMin+=el }
                    });
          return sumMin 
        }), 
        d3.max(scope.trenddata, function(d) { 
          var sumMax = 0;
          d.forEach(function(el){
                      if(typeof(el)=='number'){ sumMax+=el }
                    }); 
          return sumMax
        })
      ])
// new bars
      var newBars = svg.selectAll('rect.bar')
                      .data(scope.trenddata);
      newBars.exit().remove()
      newBars.enter().append('rect.bar')
      newBars.transition()
             .duration(2000)
             .delay(function(d,i){ return i*10 })
             .attr("x", function(d, i) { return xTrendScale(new Date(d[0].v)); })
             .attr("y", function(d) { return height - yTrendScale(d[3]); })
             .attr("transform", "translate("+(2.5*margin)+","+(2*margin)+")")
             .attr("height", function(d) { return yTrendScale(d[3]); });    
// new Y axis
      var newYTrend = svg.selectAll(".y.axis.trend")
              .data(scope.trenddata);
        newYTrend.attr('class', "y axis trend")
                  .call(yAxisTrend);
        newYTrend.transition()
          .duration(2000);
        }
// ------- Make graph size responsive -------------
var resize = function(){
  console.log('resizing')

  var width = parseInt(d3.select("#graph").style("width")) - margin*2;
  var height = parseInt(d3.select("#graph").style("height")) - margin*2;

}

// ------- WATCH FOR NEW DATA TO CHANGE STUFF --------
          scope.$watch('stockdata', function(newValues, oldValues){
            if(newValues == oldValues) {
            	return;
        	}
        	if(newValues) {
            	console.log('watching new values come in: ', newValues)
            	scope.stockdata = newValues
            	changeStockLine()
        	}
        	return
       	})
          scope.$watch('trenddata', function(newValues, oldValues){
            if(newValues == oldValues) {
              return;
          }
          if(newValues) {
              console.log('watching new values come in: ', newValues)
              scope.trenddata = newValues
              changeBars()
          }
          return
        }) ///////FOR WINDOW RESIZING
          // $scope.$watch(function() { return $window.innerWidth;}, function(value) {
          //       console.log(value);
          // });
    	}
    }
});
