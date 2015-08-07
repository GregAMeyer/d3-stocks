app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'dataCtrl'
    });
});

app.controller('dataCtrl', function($scope, yahooFactory) {
	//example data in the format the YQL would return from yahooFactory.getAAPL
    $scope.stockClose = [	{Close: 20, Date: "2015-08-02"}, 
      						{Close: 10, Date: "2015-08-01"}	];

    $scope.getNewData = function(stockSymbol, startDate, endDate){
		return yahooFactory.getNewStockData(stockSymbol, startDate, endDate)
		.then(function(newStockData){
			return	$scope.stockClose = newStockData;
		})
	}
	$scope.deleteLine = function(){
		$scope.stockClose = [];
	}
})

app.factory('yahooFactory', function($http){
	return {
		getNewStockData: function(stockSymbol, startDate, endDate){
			if(!startDate) {
				var d = new Date();
				d.setDate(d.getDate()-365);
				startDate = d;
				// var d = new Date("08/18/2009");
 			// 	d.setDate(d.getDate()-5);
 			}
			if(!endDate) endDate = new Date();
			console.log('getting', startDate, endDate)
			startDate = moment(startDate).format("YYYY-MM-DD"); //2015-06-01
			endDate = moment(endDate).format("YYYY-MM-DD"); //2015-06-01
			// return $http.get('http://download.finance.yahoo.com/d/quotes.csv?s=AAPL&f=l1')
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
//------- SVG DIMENSIONS SCALES AXES ---------
			var width = 960,
        		height = 500;

       //  	var margin = {top: 30, right: 40, bottom: 30, left: 50},
    			// width = 1000 - margin.left - margin.right,
    			// height = 600 - margin.top - margin.bottom;
			
			var xScale = d3.time.scale()
			    .domain( [new Date(scope.data[scope.data.length - 1].Date), new Date(scope.data[0].Date)] )
			    .range([0, width]);

			var yScale = d3.scale.linear()
			    .domain( [0, d3.max(scope.data, function(d) { return d.Close; })] )
			    .range([height, 0]);
			    //.nice();

			var xAxis = d3.svg.axis()
                          .scale(xScale)
                          .orient("bottom")
                          .ticks(8);
        	var yAxis = d3.svg.axis()
                          .scale(yScale)
                          .orient("left")
                          .ticks(15);

            var svg = d3.select('svg')
                    .attr("width", width)
                	.attr("height", height)
                	.append('g')
                	
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
            
            var changeStockLine = function(){

		        xScale.domain([new Date(scope.data[scope.data.length - 1].Date), new Date(scope.data[0].Date)] );
		        yScale.domain([0, d3.max(scope.data, function(d) { return d.Close }) ] );

		        var newLine = svg.selectAll('path.line')
		        	.data(scope.data)

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

