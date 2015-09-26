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

			//console.log('getting: ', stockSymbol, 'from ', startDate, 'to ', endDate)
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

			return $http.post('/api/google/'+trendTerm+'/'+startDate+'/'+endDate)
			.then(function(trendTermData){
				console.log('api factory trendTermData', trendTermData.data)
				return trendTermData.data
			})
		}
	}
});