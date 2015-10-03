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
          .range(["#004C2E", "#64AD4C", "#6b486b", "#a05d56", "#d0743c"])
          .domain([1,2]); ///////////////extend this when its working with two
      var z = d3.scale.ordinal().range(["darkblue", "blue", "lightblue"])

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
        .attr('class', 'title')
        .text("Stock Price vs Google Searches !! UNDER CONSTRUCTION !!");
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
      var stacked = d3.layout.stack()(scope.trenddata)
/*
stacked = [
    [
      {date: , term: dude, x: 0, y: 10, y0: 0},
      {date: , term: dude, x: 1, y: 12, y0: 0}
    ],
    [
      {date: , term: sweet, x: 0, y: 15, y0: 10},
      {date: , term: sweet, x: 1, y: 18, y0: 12}
    ],
]
*/
      var xTrendScale = d3.time.scale()
          .domain( [ new Date(stacked[0][0].date), 
                     new Date(stacked[0][stacked[0].length - 1].date)] )
          .range([(2*margin)+2, width]);
      var yTrendScale = d3.scale.linear()
          .domain( [ 
            d3.min(stacked, function(d){ var arr = []; 
            d.forEach(function(el){ arr.push(el.y+el.y0) })
            return Math.min(...arr)  }),
            d3.max(stacked, function(d){ var arr = [];
            d.forEach(function(el){ arr.push(el.y+el.y0) })
            return Math.max(...arr)  }) 
                  ])
          .range([height, 0])
          .nice();
      
      var yAxisTrend = d3.svg.axis()
                          .scale(yTrendScale)
                          .ticks(5)
                          .orient("right");
      svg.append('g')
          .attr('class', "y axis trend")
          .attr('stroke', 'black')
          .attr("transform", "translate("+(width+2*margin)+","+(2*margin)+")")
          .call(yAxisTrend) 

      // Add a group for each column.
      var valgroup = svg.selectAll("g.valgroup")
            .data(stacked)
            .enter().append("svg:g")
            .attr("class", "valgroup")
            .style("fill", function(d, i) { return z(i); })
            .style("stroke", function(d, i) { return d3.rgb(z(i)).darker(); });
      // Add a rect for each date.
      var rect = valgroup.selectAll("rect")
            .data(function(d){ console.log('data d in rect ', d); return d})
            .enter().append("svg:rect")
            .attr('class', 'googleBars')
            .attr("x", function(d) { 
              console.log('x attr in initial - d', d); 
              return xTrendScale(new Date(d.date))
            })
            .attr("y", function(d) { return 2*margin+height - yTrendScale(d.y-d.y0) })
            .attr("height", function(d) { 
              // console.log('rect yTS dy', yTrendScale(d.y));
              // console.log('rect yTS dy0', yTrendScale(d.y0));
              // console.log('rect yTS d', yTrendScale(d));
              return yTrendScale(d.y-d.y0) 
            })
            .attr("width", function(d){ return (-20+width-2*margin)/(scope.trenddata[0].length)});
 
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
//-------- CHANGE GRAPH FOR NEW STOCK DATA ----------       
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
      var stackedLayout = d3.layout.stack()(scope.trenddata)

      svg.selectAll('g.valgroup, rect.googleBars').remove()

      xTrendScale.domain( [ new Date(stackedLayout[0][0].date), 
                            new Date(stackedLayout[0][stackedLayout[0].length - 1].date)] )
      yTrendScale.domain( [ 
            d3.min(stacked, function(d){ var arr = []; 
            d.forEach(function(el){ arr.push(el.y+el.y0) })
            return Math.min(...arr)  }),
            d3.max(stacked, function(d){ var arr = [];
            d.forEach(function(el){ arr.push(el.y+el.y0) })
            return Math.max(...arr)  }) 
                  ])
      
      // Add a group for each column.
      var valgroup = svg.selectAll("g.valgroup")
            .data(stackedLayout)
            .enter().append("svg:g")
            .attr("class", "valgroup")
            .style("fill", function(d, i) { return z(i); })
            .style("stroke", function(d, i) { return d3.rgb(z(i)).darker(); });
      // Add a rect for each date.
      var rect = valgroup.selectAll("rect")
            .data(function(d){ console.log('data d in rect ', d); return d})
            .enter().append("svg:rect")
            .attr('class', 'googleBars')
            .attr("x", function(d) { 
              console.log('x attr in initial - d', d); 
              return xTrendScale(new Date(d.date))
            })
            .attr("y", function(d) { return 2*margin+height - yTrendScale(d.y-d.y0) })
            .attr("height", function(d) { 
              return yTrendScale(d.y-d.y0) 
            })
            .attr("width", function(d){ return (-20+width-2*margin)/(scope.trenddata[0].length)});


///// trial        
      // var newBarGroups = svg.selectAll('rect.googleBars')
      //        .data(stackedLayout);
      // newBarGroups.exit().remove()
      // var newBars = newBarGroups.selectAll("rect")
      // .data(function(d){ console.log('data d in rect ', d); return d})
      //       .enter().append("svg:rect")
      //       .attr('class', 'googleBars')
      //       .attr("x", function(d) { return xTrendScale(new Date(d.date))})
      //       .attr("y", function(d) { return 2*margin+height - yTrendScale(d.y-d.y0) })
      //       .attr("height", function(d) { 
      //         return yTrendScale(d.y-d.y0) 
      //       })
      //       .attr("width", function(d){ return (-20+width-2*margin)/(scope.trenddata[0].length)});

//////// trial     
      // newBars.transition()
      //        .duration(2000)
      //        .delay(function(d,i){ return i*10 })
      //       .attr("x", function(d) { return xTrendScale(new Date(d.date))})
      //       .attr("y", function(d) { return 2*margin+height - yTrendScale(d.y-d.y0) })
      //       .attr("height", function(d) { return yTrendScale(d.y-d.y0) })
      //       .attr("width", function(d){ return (-20+width-2*margin)/(scope.trenddata[0].length)});

//////////// trial 
      // var newBars = svg.selectAll('.googleBars').data([])
      // newBars.exit().remove();
      // newBars.data(scope.trenddata, function(d) { return d[0].searches })
      //     .enter()
      //     .append('rect.bar.googleBars')
      //     .attr("width", function(d){ return (-20+width-2*margin)/(scope.trenddata.length)})
      //     .attr("y", function(d) { return yTrendScale(d.y1) })
      //     .attr("height", function(d) { return yTrendScale(d.y0)-yTrendScale(d.y1)})
      //     .style("fill", function(d) { return colorScale(d.index); })
      //     .attr("transform", "translate("+(1+2*margin)+","+(2*margin)+")")
      //     .attr('opacity', ".75");
      // newBars.transition()
      //         .duration(2000)
      //         .delay(function(d,i){ return i*10 });


// new Y axis
      var newYTrend = svg.selectAll(".y.axis.trend")
              .data(scope.trenddata);
        newYTrend.attr('class', "y axis trend")
                  .call(yAxisTrend);
        newYTrend.transition()
          .duration(2000);
}

// ------- WATCH FOR NEW DATA TO CHANGE STUFF --------
        scope.$watch('stockdata', function(newValues, oldValues){
          if(!newValues) { return; }
          if(newValues == oldValues) { return; }
        	if(newValues) {
            	scope.stockdata = newValues;
            	changeStockLine()
        	}
        	return
       	})
        scope.$watch('trenddata', function(newValues, oldValues){
          if(!newValues) { return; }
          if(newValues == oldValues) { return; }
          if(newValues) {
            scope.trenddata = newValues;
            changeBars()
          }
          return
        })
         ///////FOR WINDOW RESIZING
          // $scope.$watch(function() { return $window.innerWidth;}, function(value) {
          //       console.log(value);
          // });
// ------- Make graph size responsive -------------
        var resize = function(){
          console.log('resizing')
          var width = parseInt(d3.select("#graph").style("width")) - margin*2;
          var height = parseInt(d3.select("#graph").style("height")) - margin*2;
        }
    	}
    }
});
