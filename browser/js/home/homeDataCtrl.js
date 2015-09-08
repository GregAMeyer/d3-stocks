app.controller('homeDataCtrl', function($scope, apiFactory) {
	//example data in the format the YQL & Custom Trend Function returns
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
        "f": "Mar 1 – 7, 2015"}, null, null, 89, null, null, true],[{
        "v": "2015-03-11T12:00:00.000Z",
        "f": "Mar 8 – 14, 2015"}, null, null, 96, null, null, true],[{
        "v": "2015-03-18T12:00:00.000Z",
        "f": "Mar 15 – 21, 2015"}, null, null, 92, null, null, true],[{
        "v": "2015-03-25T12:00:00.000Z",
        "f": "Mar 22 – 28, 2015"}, null, null, 93, null, null, true],[{
        "v": "2015-04-01T12:00:00.000Z",
        "f": "Mar 29 – Apr 4, 2015"}, null, null, 96, null, null, true],[{
        "v": "2015-04-08T12:00:00.000Z",
        "f": "Apr 5 – 11, 2015"}, null, null, 92, null, null, true],[{
        "v": "2015-04-15T12:00:00.000Z",
        "f": "Apr 12 – 18, 2015"}, null, null, 95, null, null, true],[{
        "v": "2015-04-22T12:00:00.000Z",
        "f": "Apr 19 – 25, 2015"}, null, null, 98, null, null, true],[{
        "v": "2015-04-29T12:00:00.000Z",
        "f": "Apr 26 – May 2, 2015"}, null, null, 92, null, null, true],[{
        "v": "2015-05-06T12:00:00.000Z",
        "f": "May 3 – 9, 2015"}, null, null, 95, null, null, true],[{
        "v": "2015-05-13T12:00:00.000Z",
        "f": "May 10 – 16, 2015"}, null, null, 99, null, null, true],[{
        "v": "2015-05-20T12:00:00.000Z",
        "f": "May 17 – 23, 2015"}, null, null, 98, null, null, true],[{
        "v": "2015-05-27T12:00:00.000Z",
        "f": "May 24 – 30, 2015"}, null, null, 95, null, null, true],[{
        "v": "2015-06-03T12:00:00.000Z",
        "f": "May 31 – Jun 6, 2015"}, null, null, 100, null, null, true],[{
        "v": "2015-06-10T12:00:00.000Z",
        "f": "Jun 7 – 13, 2015"}, null, null, 98, null, null, true],[{
        "v": "2015-06-17T12:00:00.000Z",
        "f": "Jun 14 – 20, 2015"}, null, null, 99, null, null, true],[{
        "v": "2015-06-24T12:00:00.000Z",
        "f": "Jun 21 – 27, 2015"}, null, null, 94, null, null, true],[{
        "v": "2015-07-01T12:00:00.000Z",
        "f": "Jun 28 – Jul 4, 2015"}, null, null, 94, null, null, true],[{
        "v": "2015-07-08T12:00:00.000Z",
        "f": "Jul 5 – 11, 2015"}, null, null, 98, null, null, true],[{
        "v": "2015-07-15T12:00:00.000Z",
        "f": "Ju1 12 – 18, 2015"}, null, null, 99, null, null, true],[{
        "v": "2015-07-22T12:00:00.000Z",
        "f": "Jul 19 – 25, 2015"}, null, null, 94, null, null, true],[{
        "v": "2015-07-29T12:00:00.000Z",
        "f": "Jul 26 – Aug 2, 2015"}, null, null, 94, null, null, true],[{
        "v": "2015-08-06T12:00:00.000Z",
        "f": "Aug 3 – 09, 2015"}, null, null, 98, null, null, true],[{
        "v": "2015-08-13T12:00:00.000Z",
        "f": "Aug 10 – 16, 2015"}, null, null, 99, null, null, true],[{
        "v": "2015-08-20T12:00:00.000Z",
        "f": "Aug 17 – 24, 2015"}, null, null, 94, null, null, true],[{
        "v": "2015-08-27T12:00:00.000Z",
        "f": "Aug 25 – 30, 2015"}, null, null, 94, null, null, true]];

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