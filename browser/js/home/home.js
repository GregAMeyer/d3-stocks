app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'dataCtrl'
    });
});

app.controller('dataCtrl', function($scope, yahooFactory) {
	//example data in the format the YQL would return from yahooFactory.getAAPL
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

    $scope.getNewData = function(stockSymbol, startDate, endDate){
		return yahooFactory.getNewStockData(stockSymbol, startDate, endDate)
		.then(function(newStockData){
			return	$scope.stockClose = newStockData;
		})
	}
})

app.factory('yahooFactory', function($http){
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
		}
	}
});

app.directive('mainGraph', function () {
    return {
      restrict: 'E',
      scope: {
      	data: '='
      },
      templateUrl: 'js/common/directives/main-graph/main-graph.html',
      controller: 'dataCtrl',
      link: function (scope, element, attrs) {
//------- SVG DIMENSIONS, SCALES, AXES ---------
			var margin = 20;
			var width = 600+(2*margin);
			var height = 400+(2*margin);
			var xScale = d3.time.scale()
			    .domain( [new Date(scope.data[scope.data.length - 1].Date), new Date(scope.data[0].Date)] )
			    .range([0, width]);
			var yScale = d3.scale.linear()
			    .domain( [ .95*d3.min(scope.data, function(d) { return d.Close; }), 1.05*d3.max(scope.data, function(d) { return d.Close; })] )
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
                          .orient("right");
            var svg = d3.select('svg')
                    	.attr("width", width+(2*margin))
                		.attr("height", height+(2*margin));
                	// .append('g')
                	// 	.attr("transform", "translate("+margin+","+margin+")");

            svg.append('g')
            	.attr('class', "x axis")
            	.attr('stroke', 'black')
            	.attr("transform", "translate(0," + height + ")")
            	.call(xAxis)
            svg.append('g')
            	.attr('class', "y axis")
            	.attr('stroke', 'black')
            	.call(yAxis)                	
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
    			.attr("d", makeLine(scope.data));
//-------- CHANGE GRAPH FOR NEW DATA -----------            
            var changeStockLine = function(){
		        xScale.domain([new Date(scope.data[scope.data.length - 1].Date), new Date(scope.data[0].Date)] );
		        yScale.domain([ .95*d3.min(scope.data, function(d) { return d.Close; }), 1.05*d3.max(scope.data, function(d) { return d.Close; })] );
// new stock price line
		        var newLine = svg.selectAll('path.line')
		        				.data(scope.data);
		        newLine.exit().remove()
		        newLine.enter().append('line')
		        	.attr("class", "line")
    				.attr('fill', 'none')
    				.attr('stroke-width', 3)
          			.attr('stroke', "#77876B")
    				.attr("d", makeLine(scope.data));
    			newLine.transition()
    				.duration(2000)
                	.delay(function(d,i){ return i*10 })
                	.attr('d', makeLine(scope.data))
// new X axis
               	var newX = svg.selectAll(".x.axis")
               					.data(scope.data);  
               	newX.attr('class', "x axis")
	            	.attr("transform", "translate(0," + height + ")")
	            	.call(xAxis);
            	newX.transition()
    				.duration(2000);
// new Y axis
				var newY = svg.selectAll(".y.axis")
								.data(scope.data);
    			newY.attr('class', "y axis")
               	    .call(yAxis);
    			newY.transition()
    				.duration(2000);
		    }
            scope.$watch('data', function(newValues, oldValues){
	            if(newValues == oldValues) {
	            	return;
	        	}
	        	if(newValues) {
	            	console.log('watching new values come in: ', newValues)
	            	scope.data = newValues
	            	changeStockLine()
	        	}
	        	return
	       	})
    	}
    }
});

