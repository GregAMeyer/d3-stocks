app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'dataCtrl'
    });
});

app.controller('dataCtrl', function($scope, apiFactory) {
	//example data in the format the YQL returns
    $scope.stockClose = [
     {"Close": "59","Date": "2015-08-04"},{"Close": "57","Date": "2015-08-03"},{"Close": "58","Date": "2015-07-31"},
     {"Close": "55","Date": "2015-07-30"},{"Close": "53","Date": "2015-07-29"},{"Close": "52","Date": "2015-07-28"},
     {"Close": "55","Date": "2015-07-27"},{"Close": "56","Date": "2015-07-26"},{"Close": "56","Date": "2015-07-24"},
     {"Close": "50","Date": "2015-07-22"},{"Close": "53","Date": "2015-07-21"},{"Close": "59","Date": "2015-07-20"},
     {"Close": "57","Date": "2015-07-19"},{"Close": "53","Date": "2015-07-17"},{"Close": "52","Date": "2015-07-15"},
     {"Close": "48","Date": "2015-07-14"},{"Close": "48","Date": "2015-07-13"},{"Close": "51","Date": "2015-07-10"},
     {"Close": "40","Date": "2015-07-09"},{"Close": "44","Date": "2015-07-07"},{"Close": "47","Date": "2015-07-06"},
     {"Close": "42","Date": "2015-07-04"},{"Close": "46","Date": "2015-07-02"},{"Close": "49","Date": "2015-06-30"},
     {"Close": "45","Date": "2015-06-29"},{"Close": "43","Date": "2015-06-27"},{"Close": "47","Date": "2015-06-25"},
     {"Close": "45","Date": "2015-06-24"},{"Close": "43","Date": "2015-06-23"},{"Close": "43","Date": "2015-06-22"},
     {"Close": "44","Date": "2015-06-20"},{"Close": "44","Date": "2015-06-18"},{"Close": "42","Date": "2015-06-17"},
     {"Close": "45","Date": "2015-06-16"},{"Close": "42","Date": "2015-06-15"},{"Close": "45","Date": "2015-06-13"},
     {"Close": "45","Date": "2015-06-12"},{"Close": "42","Date": "2015-06-10"},{"Close": "46","Date": "2015-06-08"},
     {"Close": "45","Date": "2015-06-07"},{"Close": "41","Date": "2015-06-06"},{"Close": "43","Date": "2015-06-05"},
     {"Close": "41","Date": "2015-06-04"},{"Close": "41","Date": "2015-06-03"},{"Close": "48","Date": "2015-05-31"},
     {"Close": "45","Date": "2015-05-30"},{"Close": "43","Date": "2015-05-29"},{"Close": "42","Date": "2015-05-28"},
     {"Close": "43","Date": "2015-05-28"},{"Close": "44","Date": "2015-05-26"},{"Close": "46","Date": "2015-05-25"},
     {"Close": "49","Date": "2015-05-24"},{"Close": "43","Date": "2015-05-22"},{"Close": "45","Date": "2015-05-20"},
     {"Close": "45","Date": "2015-05-17"},{"Close": "43","Date": "2015-05-16"},{"Close": "42","Date": "2015-05-15"},
     {"Close": "48","Date": "2015-05-14"},{"Close": "39","Date": "2015-05-13"},{"Close": "41","Date": "2015-05-12"},
     {"Close": "48","Date": "2015-05-11"},{"Close": "39","Date": "2015-05-10"},{"Close": "41","Date": "2015-05-09"},
     {"Close": "45","Date": "2015-05-08"},{"Close": "40","Date": "2015-05-05"},{"Close": "39","Date": "2015-05-03"},
     {"Close": "42","Date": "2015-05-02"},{"Close": "43","Date": "2015-05-01"},{"Close": "43","Date": "2015-04-30"},
     {"Close": "45","Date": "2015-04-29"},{"Close": "41","Date": "2015-04-26"},{"Close": "37","Date": "2015-04-25"},
     {"Close": "41","Date": "2015-04-24"},{"Close": "39","Date": "2015-04-23"},{"Close": "33","Date": "2015-04-20"},
     {"Close": "44","Date": "2015-04-19"},{"Close": "43","Date": "2015-04-18"},{"Close": "37","Date": "2015-04-17"},
     {"Close": "39","Date": "2015-04-14"},{"Close": "35","Date": "2015-04-13"},{"Close": "39","Date": "2015-04-12"},
     {"Close": "39","Date": "2015-04-10"},{"Close": "35","Date": "2015-04-08"},{"Close": "39","Date": "2015-04-07"},
     {"Close": "39","Date": "2015-04-05"},{"Close": "35","Date": "2015-04-03"},{"Close": "39","Date": "2015-04-01"},
     {"Close": "40","Date": "2015-03-29"},{"Close": "40","Date": "2015-03-26"},{"Close": "41","Date": "2015-03-25"},
     {"Close": "41","Date": "2015-03-24"},{"Close": "39","Date": "2015-03-23"},{"Close": "39","Date": "2015-03-20"},
     {"Close": "44","Date": "2015-03-19"},{"Close": "40","Date": "2015-03-18"},{"Close": "35","Date": "2015-03-17"},
     {"Close": "37","Date": "2015-03-14"},{"Close": "35","Date": "2015-03-13"},{"Close": "39","Date": "2015-03-10"},
     {"Close": "37","Date": "2015-03-08"},{"Close": "35","Date": "2015-03-06"},{"Close": "39","Date": "2015-03-04"},
     {"Close": "37","Date": "2015-03-03"},{"Close": "35","Date": "2015-03-01"},{"Close": "39","Date": "2015-02-28"},
     {"Close": "43","Date": "2015-02-27"},{"Close": "34","Date": "2015-02-26"},{"Close": "37","Date": "2015-02-25"},
     {"Close": "41","Date": "2015-02-24"},{"Close": "35","Date": "2015-02-22"},{"Close": "33","Date": "2015-02-20"},
     {"Close": "39","Date": "2015-02-18"},{"Close": "33","Date": "2015-02-16"},{"Close": "32","Date": "2015-02-15"},
     {"Close": "35","Date": "2015-02-14"},{"Close": "32","Date": "2015-02-13"},{"Close": "30","Date": "2015-02-12"}		]; 
    $scope.trenddata = [[{
        "v": "2015-03-04T13:00:00.000Z",
        "f": "Mar 1 – 7, 2015"}, null, null, 89, null, null, true],
    [{
        "v": "2015-03-11T12:00:00.000Z",
        "f": "Mar 8 – 14, 2015"}, null, null, 96, null, null, true],
    [{
        "v": "2015-03-18T12:00:00.000Z",
        "f": "Mar 15 – 21, 2015"}, null, null, 92, null, null, true],
    [{
        "v": "2015-03-25T12:00:00.000Z",
        "f": "Mar 22 – 28, 2015"}, null, null, 93, null, null, true],
    [{
        "v": "2015-04-01T12:00:00.000Z",
        "f": "Mar 29 – Apr 4, 2015"}, null, null, 96, null, null, true],
    [{
        "v": "2015-04-08T12:00:00.000Z",
        "f": "Apr 5 – 11, 2015"}, null, null, 92, null, null, true],
    [{
        "v": "2015-04-15T12:00:00.000Z",
        "f": "Apr 12 – 18, 2015"}, null, null, 95, null, null, true],
    [{
        "v": "2015-04-22T12:00:00.000Z",
        "f": "Apr 19 – 25, 2015"}, null, null, 98, null, null, true],
    [{
        "v": "2015-04-29T12:00:00.000Z",
        "f": "Apr 26 – May 2, 2015"}, null, null, 92, null, null, true],
    [{
        "v": "2015-05-06T12:00:00.000Z",
        "f": "May 3 – 9, 2015"}, null, null, 95, null, null, true],
    [{
        "v": "2015-05-13T12:00:00.000Z",
        "f": "May 10 – 16, 2015"}, null, null, 99, null, null, true],
    [{
        "v": "2015-05-20T12:00:00.000Z",
        "f": "May 17 – 23, 2015"}, null, null, 98, null, null, true],
    [{
        "v": "2015-05-27T12:00:00.000Z",
        "f": "May 24 – 30, 2015"}, null, null, 95, null, null, true],
    [{
        "v": "2015-06-03T12:00:00.000Z",
        "f": "May 31 – Jun 6, 2015"}, null, null, 100, null, null, true],
    [{
        "v": "2015-06-10T12:00:00.000Z",
        "f": "Jun 7 – 13, 2015"}, null, null, 98, null, null, true],
    [{
        "v": "2015-06-17T12:00:00.000Z",
        "f": "Jun 14 – 20, 2015"}, null, null, 99, null, null, true],
    [{
        "v": "2015-06-24T12:00:00.000Z",
        "f": "Jun 21 – 27, 2015"}, null, null, 94, null, null, true],
    [{
        "v": "2015-07-01T12:00:00.000Z",
        "f": "Jun 28 – Jul 4, 2015"}, null, null, 94, null, null, true],
    [{
        "v": "2015-07-08T12:00:00.000Z",
        "f": "Jul 5 – 11, 2015"
    }, null, null, 98, null, null, true],
    [{
        "v": "2015-07-15T12:00:00.000Z",
        "f": "Ju1 12 – 18, 2015"
    }, null, null, 99, null, null, true],
    [{
        "v": "2015-07-22T12:00:00.000Z",
        "f": "Jul 19 – 25, 2015"
    }, null, null, 94, null, null, true],
    [{
        "v": "2015-07-29T12:00:00.000Z",
        "f": "Jul 26 – Aug 2, 2015"
    }, null, null, 94, null, null, true],
    [{
        "v": "2015-08-06T12:00:00.000Z",
        "f": "Aug 3 – 09, 2015"
    }, null, null, 98, null, null, true],
    [{
        "v": "2015-08-13T12:00:00.000Z",
        "f": "Aug 10 – 16, 2015"
    }, null, null, 99, null, null, true],
    [{
        "v": "2015-08-20T12:00:00.000Z",
        "f": "Aug 17 – 24, 2015"
    }, null, null, 94, null, null, true],
    [{
        "v": "2015-08-27T12:00:00.000Z",
        "f": "Aug 25 – 30, 2015"
    }, null, null, 94, null, null, true]];

    $scope.getNewData = function(stockSymbol, startDate, endDate){
		return apiFactory.getNewStockData(stockSymbol, startDate, endDate)
		.then(function(newStockData){
			return	$scope.stockClose = newStockData;
		})
	}
	$scope.getNewTrendData = function(trendTerm, startDate, endDate){
		return apiFactory.getTrendData(trendTerm, startDate, endDate)
		.then(function(newTrendData){
			return $scope.trendData = newTrendData;
		})
	}
})

app.factory('apiFactory', function($http){
	return {
		getNewStockData: function(stockSymbol, startDate, endDate){
			if(!startDate) {
				var d = new Date();
				d.setDate(d.getDate()-165);
				startDate = d;
 			}
			if(!endDate) endDate = new Date();
			startDate = moment(startDate).format("YYYY-MM-DD"); //2015-06-01
			endDate = moment(endDate).format("YYYY-MM-DD"); //2015-06-01

			console.log('getting: ', stockSymbol, 'from ', startDate, 'to ', endDate)
			return $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20Close%2C%20Date%20from%20yahoo.finance.historicaldata%20where%20symbol%20%3D%20%22+"+ stockSymbol +"%22%20and%20startDate%20%3D%20%22"+ startDate +"%22%20and%20endDate%20%3D%20%22"+ endDate +"%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=")
			.then(function(stockPrices){
				return stockPrices.data.query.results.quote
			})
		},
		getTrendData: function(trendTerm, startDate, endDate){
			if(!startDate) {
				var d = new Date();
				d.setDate(d.getDate()-165);
				startDate = d;
 			}
			if(!endDate) endDate = new Date();
			startDate = moment(startDate).format("YYYY-MM-DD"); //2015-06-01
			endDate = moment(endDate).format("YYYY-MM-DD"); //2015-06-01

			return $http.post('http://localhost:1337/api/google/'+trendTerm+'/'+startDate+'/'+endDate)
			.then(function(trendTermData){
				return trendTermData.data
			})
		}
	}
});

app.directive('mainGraph', function () {
    return {
      restrict: 'E',
      scope: {
      	stockdata: '=',
      	trenddata: '='
      },
      templateUrl: 'js/common/directives/main-graph/main-graph.html',
      controller: 'dataCtrl',
      link: function (scope, element, attrs) {
//------- SVG DIMENSIONS, SCALES, AXES ---------
			var margin = 20;
			var width = 850-(2*margin);
			var height = 500-(2*margin);
			var xScale = d3.time.scale()
			    .domain( [new Date(scope.stockdata[scope.stockdata.length - 1].Date), new Date(scope.stockdata[0].Date)] )
			    .range([0, width]);
			var yScale = d3.scale.linear()
			    .domain( [ .95*d3.min(scope.stockdata, function(d) { return d.Close; }), 1.05*d3.max(scope.stockdata, function(d) { return d.Close; })] )
			    .range([height, 0])
			    .nice();

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
      	.attr("transform", "translate(0," + (height+(2*margin)+3) + ")")
      	.call(xAxis)
      svg.append('g')
      	.attr('class', "y axis stock")
      	.attr('stroke', 'black')
        .attr("transform", "translate("+ (2*margin)+"," + (2*margin) + ")")
        .call(yAxis)
                       	
//------- GOOGLE TREND BARS ON GRAPH -----------
      var xTrendScale = d3.time.scale()
          .domain( [ new Date(scope.trenddata[0][0].v), new Date(scope.trenddata[scope.trenddata.length - 1][0].v)] )
          .range([0, width-margin]);
      var yTrendScale = d3.scale.linear()
          .domain( [ d3.min(scope.trenddata, function(d) { return d[3]; }), d3.max(scope.trenddata, function(d) { return d[3]; })] )
          .range([height, 0])
          .nice();
      var yAxisTrend = d3.svg.axis()
                          .scale(yTrendScale)
                          .ticks(5)
                          .orient("right");

          var x = 680;
          var yAxisTrans = width+(2*margin);

      svg.append('g')
        .attr('class', "y axis trend")
        .attr('stroke', 'black')
        .attr("transform", "translate("+yAxisTrans+","+(2*margin)+")")
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
                .attr('opacity', ".5");
      
//------- LINE ON GRAPH ----------------------
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
//-------- CHANGE GRAPH FOR NEW DATA -----------            
      var changeStockLine = function(){
      xScale.domain([new Date(scope.stockdata[scope.stockdata.length - 1].Date), new Date(scope.stockdata[0].Date)] );
      yScale.domain([ .95*d3.min(scope.stockdata, function(d) { return d.Close; }), 1.05*d3.max(scope.stockdata, function(d) { return d.Close; })] );
// new stock price line
      var newLine = svg.selectAll('path.line')
      				        .data(scope.stockdata);
      newLine.exit().remove()
      newLine.enter().append('line')
   //        	 .attr("class", "line")
			//        .attr('fill', 'none')
			//        .attr('stroke-width', 3)
   //  			   .attr('stroke', "#77876B")
			// .attr("d", makeLine(scope.stockdata))
   //    .attr("transform", "translate("+margin+", 0)");
		  newLine.transition()
			       .duration(2000)
          	 .delay(function(d,i){ return i*10 })
          	 .attr('d', makeLine(scope.stockdata))
// new X axis
     	var newX = svg.selectAll(".x.axis")
     					.data(scope.stockdata);  
     	newX.attr('class', "x axis")
    	     .attr("transform", "translate("+ 2*margin+"," + (height+(2*margin)+3) + ")")
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
  console.log('changing bars')
      xTrendScale.domain( [ new Date(scope.trenddata[0][0].v), new Date(scope.trenddata[scope.trenddata.length - 1][0].v)] )
      yTrendScale.domain( [ d3.min(scope.trenddata, function(d) { return d[3]; }), d3.max(scope.trenddata, function(d) { return d[3]; })] )
// new bars
      var newBars = svg.selectAll('rect.bar')
                      .data(scope.trenddata);

      newBars.exit().remove()

      newBars.enter().append('rect.bar')
                // .attr("x", function(d, i) { return xTrendScale(new Date(d[0].v)); })
                // .attr("y", function(d) { return height - yTrendScale(d[3]); })
                // .attr("width", function(d){ return (-20+width-2*margin)/scope.trenddata.length })
                // .attr("height", function(d) { return yTrendScale(d[3]); })
                // .attr("transform", "translate("+(5*margin)+","+margin+")")
                // .attr('opacity', ".35");

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








