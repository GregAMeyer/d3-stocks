app.controller('homeDataCtrl', function($scope, apiFactory) {
  
  $scope.getNewData = function(stockSymbol, startDate, endDate){
		return apiFactory.getNewStockData(stockSymbol, startDate, endDate)
		.then(function(newStockData){
            $scope.stockClose = newStockData
			return $scope.stockClose;
		})
	}
	$scope.getNewTrendData = function(startDate, endDate){
        var tt1 = $scope.trendTerm1 || "";
        var tt2 = $scope.trendTerm2 || "";
        var tt3 = $scope.trendTerm3 || "";
        var tt4 = $scope.trendTerm4 || "";
        var tt5 = $scope.trendTerm5 || "";

        var trendTerm = tt1+","+tt2+","+tt3+","+tt4+","+tt5;

		return apiFactory.getTrendData(trendTerm, startDate, endDate)
		.then(function(newTrendData){
            $scope.trendData = newTrendData;
			return $scope.trendData; 
		})
	}
    $scope.isCollapsedStart = true;
    $scope.isCollapsedEnd = true;
    $scope.isCollapsed3 = true;
    $scope.isCollapsed4 = true;
    $scope.isCollapsed5 = true;

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
     {"Close": "35","Date": "2015-02-14"},{"Close": "32","Date": "2015-02-13"},{"Close": "30","Date": "2015-02-12"}     ]; 
    
    $scope.trenddata = [ [ { date: 'Wed Apr 08 2015 08:00:00 GMT-0400 (EDT)', x: 0, y: 11, term: 'dude' },
    { date: 'Wed Apr 15 2015 08:00:00 GMT-0400 (EDT)',
      x: 1, y: 11, term: 'dude' },
    { date: 'Wed Apr 22 2015 08:00:00 GMT-0400 (EDT)',
      x: 2, y: 11, term: 'dude' },
    { date: 'Wed Apr 29 2015 08:00:00 GMT-0400 (EDT)',
      x: 3, y: 12, term: 'dude' },
    { date: 'Wed May 06 2015 08:00:00 GMT-0400 (EDT)',
      x: 4, y: 13, term: 'dude' },
    { date: 'Wed May 13 2015 08:00:00 GMT-0400 (EDT)',
      x: 5, y: 13, term: 'dude' },
    { date: 'Wed May 20 2015 08:00:00 GMT-0400 (EDT)',
      x: 6, y: 11, term: 'dude' },
    { date: 'Wed May 27 2015 08:00:00 GMT-0400 (EDT)',
      x: 7, y: 11, term: 'dude' },
    { date: 'Wed Jun 03 2015 08:00:00 GMT-0400 (EDT)',
      x: 8, y: 11, term: 'dude' },
    { date: 'Wed Jun 10 2015 08:00:00 GMT-0400 (EDT)',
      x: 9, y: 13, term: 'dude' },
    { date: 'Wed Jun 17 2015 08:00:00 GMT-0400 (EDT)',
      x: 10, y: 13, term: 'dude' },
    { date: 'Wed Jun 24 2015 08:00:00 GMT-0400 (EDT)',
      x: 11, y: 12, term: 'dude' },
    { date: 'Wed Jul 01 2015 08:00:00 GMT-0400 (EDT)',
      x: 12, y: 12, term: 'dude' },
    { date: 'Wed Jul 08 2015 08:00:00 GMT-0400 (EDT)',
      x: 13, y: 13, term: 'dude' },
    { date: 'Wed Jul 15 2015 08:00:00 GMT-0400 (EDT)',
      x: 14, y: 12, term: 'dude' },
    { date: 'Wed Jul 22 2015 08:00:00 GMT-0400 (EDT)',
      x: 15, y: 11, term: 'dude' },
    { date: 'Wed Jul 29 2015 08:00:00 GMT-0400 (EDT)',
      x: 16, y: 11, term: 'dude' },
    { date: 'Wed Aug 05 2015 08:00:00 GMT-0400 (EDT)',
      x: 17, y: 11, term: 'dude' },
    { date: 'Wed Aug 12 2015 08:00:00 GMT-0400 (EDT)',
      x: 18, y: 11, term: 'dude' },
    { date: 'Wed Aug 19 2015 08:00:00 GMT-0400 (EDT)',
      x: 19, y: 12, term: 'dude' },
    { date: 'Wed Aug 26 2015 08:00:00 GMT-0400 (EDT)',
      x: 20, y: 12, term: 'dude' },
    { date: 'Wed Sep 02 2015 08:00:00 GMT-0400 (EDT)',
      x: 21, y: 11, term: 'dude' } ],
  [ { date: 'Wed Apr 08 2015 08:00:00 GMT-0400 (EDT)',
      x: 0, y: 100, term: 'sweet' },
    { date: 'Wed Apr 15 2015 08:00:00 GMT-0400 (EDT)',
      x: 1, y: 97, term: 'sweet' },
    { date: 'Wed Apr 22 2015 08:00:00 GMT-0400 (EDT)',
      x: 2, y: 96, term: 'sweet' },
    { date: 'Wed Apr 29 2015 08:00:00 GMT-0400 (EDT)',
      x: 3, y: 97, term: 'sweet' },
    { date: 'Wed May 06 2015 08:00:00 GMT-0400 (EDT)',
      x: 4, y: 97, term: 'sweet' },
    { date: 'Wed May 13 2015 08:00:00 GMT-0400 (EDT)',
      x: 5, y: 100, term: 'sweet' },
    { date: 'Wed May 20 2015 08:00:00 GMT-0400 (EDT)',
      x: 6, y: 98, term: 'sweet' },
    { date: 'Wed May 27 2015 08:00:00 GMT-0400 (EDT)',
      x: 7, y: 97, term: 'sweet' },
    { date: 'Wed Jun 03 2015 08:00:00 GMT-0400 (EDT)',
      x: 8, y: 96, term: 'sweet' },
    { date: 'Wed Jun 10 2015 08:00:00 GMT-0400 (EDT)',
      x: 9, y: 95, term: 'sweet' },
    { date: 'Wed Jun 17 2015 08:00:00 GMT-0400 (EDT)',
      x: 10, y: 94, term: 'sweet' },
    { date: 'Wed Jun 24 2015 08:00:00 GMT-0400 (EDT)',
      x: 11, y: 96, term: 'sweet' },
    { date: 'Wed Jul 01 2015 08:00:00 GMT-0400 (EDT)',
      x: 12, y: 94, term: 'sweet' },
    { date: 'Wed Jul 08 2015 08:00:00 GMT-0400 (EDT)',
      x: 13, y: 96, term: 'sweet' },
    { date: 'Wed Jul 15 2015 08:00:00 GMT-0400 (EDT)',
      x: 14, y: 99, term: 'sweet' },
    { date: 'Wed Jul 22 2015 08:00:00 GMT-0400 (EDT)',
      x: 15, y: 96, term: 'sweet' },
    { date: 'Wed Jul 29 2015 08:00:00 GMT-0400 (EDT)',
      x: 16, y: 99, term: 'sweet' },
    { date: 'Wed Aug 05 2015 08:00:00 GMT-0400 (EDT)',
      x: 17, y: 98, term: 'sweet' },
    { date: 'Wed Aug 12 2015 08:00:00 GMT-0400 (EDT)',
      x: 18, y: 98, term: 'sweet' },
    { date: 'Wed Aug 19 2015 08:00:00 GMT-0400 (EDT)',
      x: 19, y: 98, term: 'sweet' },
    { date: 'Wed Aug 26 2015 08:00:00 GMT-0400 (EDT)',
      x: 20, y: 96, term: 'sweet' },
    { date: 'Wed Sep 02 2015 08:00:00 GMT-0400 (EDT)',
      x: 21, y: 96, term: 'sweet' } ],
  [ { date: 'Wed Apr 08 2015 08:00:00 GMT-0400 (EDT)', 
      x: 0, y: 11, term: 'apples' },
    { date: 'Wed Apr 15 2015 08:00:00 GMT-0400 (EDT)',
      x: 1, y: 15, term: 'apples' },
    { date: 'Wed Apr 22 2015 08:00:00 GMT-0400 (EDT)',
      x: 2, y: 21, term: 'apples' },
    { date: 'Wed Apr 29 2015 08:00:00 GMT-0400 (EDT)',
      x: 3, y: 22, term: 'apples' },
    { date: 'Wed May 06 2015 08:00:00 GMT-0400 (EDT)',
      x: 4, y: 23, term: 'apples' },
    { date: 'Wed May 13 2015 08:00:00 GMT-0400 (EDT)',
      x: 5, y: 23, term: 'apples' },
    { date: 'Wed May 20 2015 08:00:00 GMT-0400 (EDT)',
      x: 6, y: 21, term: 'apples' },
    { date: 'Wed May 27 2015 08:00:00 GMT-0400 (EDT)',
      x: 7, y: 21, term: 'apples' },
    { date: 'Wed Jun 03 2015 08:00:00 GMT-0400 (EDT)',
      x: 8, y: 21, term: 'apples' },
    { date: 'Wed Jun 10 2015 08:00:00 GMT-0400 (EDT)',
      x: 9, y: 23, term: 'apples' },
    { date: 'Wed Jun 17 2015 08:00:00 GMT-0400 (EDT)',
      x: 10, y: 23, term: 'apples' },
    { date: 'Wed Jun 24 2015 08:00:00 GMT-0400 (EDT)',
      x: 11, y: 22, term: 'apples' },
    { date: 'Wed Jul 01 2015 08:00:00 GMT-0400 (EDT)',
      x: 12, y: 22, term: 'apples' },
    { date: 'Wed Jul 08 2015 08:00:00 GMT-0400 (EDT)',
      x: 13, y: 23, term: 'apples' },
    { date: 'Wed Jul 15 2015 08:00:00 GMT-0400 (EDT)',
      x: 14, y: 22, term: 'apples' },
    { date: 'Wed Jul 22 2015 08:00:00 GMT-0400 (EDT)',
      x: 15, y: 15, term: 'apples' },
    { date: 'Wed Jul 29 2015 08:00:00 GMT-0400 (EDT)',
      x: 16, y: 17, term: 'apples' },
    { date: 'Wed Aug 05 2015 08:00:00 GMT-0400 (EDT)',
      x: 17, y: 14, term: 'apples' },
    { date: 'Wed Aug 12 2015 08:00:00 GMT-0400 (EDT)',
      x: 18, y: 19, term: 'apples' },
    { date: 'Wed Aug 19 2015 08:00:00 GMT-0400 (EDT)',
      x: 19, y: 18, term: 'apples' },
    { date: 'Wed Aug 26 2015 08:00:00 GMT-0400 (EDT)',
      x: 20, y: 15, term: 'apples' },
    { date: 'Wed Sep 02 2015 08:00:00 GMT-0400 (EDT)',
      x: 21, y: 16, term: 'apples' } ],
  [ { date: 'Wed Apr 08 2015 08:00:00 GMT-0400 (EDT)', 
      x: 0, y: 11, term: 'oranges' },
    { date: 'Wed Apr 15 2015 08:00:00 GMT-0400 (EDT)',
      x: 1, y: 15, term: 'oranges' },
    { date: 'Wed Apr 22 2015 08:00:00 GMT-0400 (EDT)',
      x: 2, y: 21, term: 'oranges' },
    { date: 'Wed Apr 29 2015 08:00:00 GMT-0400 (EDT)',
      x: 3, y: 25, term: 'oranges' },
    { date: 'Wed May 06 2015 08:00:00 GMT-0400 (EDT)',
      x: 4, y: 26, term: 'oranges' },
    { date: 'Wed May 13 2015 08:00:00 GMT-0400 (EDT)',
      x: 5, y: 27, term: 'oranges' },
    { date: 'Wed May 20 2015 08:00:00 GMT-0400 (EDT)',
      x: 6, y: 31, term: 'oranges' },
    { date: 'Wed May 27 2015 08:00:00 GMT-0400 (EDT)',
      x: 7, y: 31, term: 'oranges' },
    { date: 'Wed Jun 03 2015 08:00:00 GMT-0400 (EDT)',
      x: 8, y: 31, term: 'oranges' },
    { date: 'Wed Jun 10 2015 08:00:00 GMT-0400 (EDT)',
      x: 9, y: 23, term: 'oranges' },
    { date: 'Wed Jun 17 2015 08:00:00 GMT-0400 (EDT)',
      x: 10, y: 33, term: 'oranges' },
    { date: 'Wed Jun 24 2015 08:00:00 GMT-0400 (EDT)',
      x: 11, y: 32, term: 'oranges' },
    { date: 'Wed Jul 01 2015 08:00:00 GMT-0400 (EDT)',
      x: 12, y: 32, term: 'oranges' },
    { date: 'Wed Jul 08 2015 08:00:00 GMT-0400 (EDT)',
      x: 13, y: 33, term: 'oranges' },
    { date: 'Wed Jul 15 2015 08:00:00 GMT-0400 (EDT)',
      x: 14, y: 32, term: 'oranges' },
    { date: 'Wed Jul 22 2015 08:00:00 GMT-0400 (EDT)',
      x: 15, y: 25, term: 'oranges' },
    { date: 'Wed Jul 29 2015 08:00:00 GMT-0400 (EDT)',
      x: 16, y: 27, term: 'oranges' },
    { date: 'Wed Aug 05 2015 08:00:00 GMT-0400 (EDT)',
      x: 17, y: 34, term: 'oranges' },
    { date: 'Wed Aug 12 2015 08:00:00 GMT-0400 (EDT)',
      x: 18, y: 39, term: 'oranges' },
    { date: 'Wed Aug 19 2015 08:00:00 GMT-0400 (EDT)',
      x: 19, y: 38, term: 'oranges' },
    { date: 'Wed Aug 26 2015 08:00:00 GMT-0400 (EDT)',
      x: 20, y: 25, term: 'oranges' },
    { date: 'Wed Sep 02 2015 08:00:00 GMT-0400 (EDT)',
      x: 21, y: 36, term: 'oranges' } ],
    [   { date: 'Wed Apr 08 2015 08:00:00 GMT-0400 (EDT)',
      x: 0, y: 15, term: 'bananas' },
    { date: 'Wed Apr 15 2015 08:00:00 GMT-0400 (EDT)',
      x: 1, y: 17, term: 'bananas' },
    { date: 'Wed Apr 22 2015 08:00:00 GMT-0400 (EDT)',
      x: 2, y: 16, term: 'bananas' },
    { date: 'Wed Apr 29 2015 08:00:00 GMT-0400 (EDT)',
      x: 3, y: 17, term: 'bananas' },
    { date: 'Wed May 06 2015 08:00:00 GMT-0400 (EDT)',
      x: 4, y: 17, term: 'bananas' },
    { date: 'Wed May 13 2015 08:00:00 GMT-0400 (EDT)',
      x: 5, y: 10, term: 'bananas' },
    { date: 'Wed May 20 2015 08:00:00 GMT-0400 (EDT)',
      x: 6, y: 18, term: 'bananas' },
    { date: 'Wed May 27 2015 08:00:00 GMT-0400 (EDT)',
      x: 7, y: 17, term: 'bananas' },
    { date: 'Wed Jun 03 2015 08:00:00 GMT-0400 (EDT)',
      x: 8, y: 16, term: 'bananas' },
    { date: 'Wed Jun 10 2015 08:00:00 GMT-0400 (EDT)',
      x: 9, y: 15, term: 'bananas' },
    { date: 'Wed Jun 17 2015 08:00:00 GMT-0400 (EDT)',
      x: 10, y: 14, term: 'bananas' },
    { date: 'Wed Jun 24 2015 08:00:00 GMT-0400 (EDT)',
      x: 11, y: 16, term: 'bananas' },
    { date: 'Wed Jul 01 2015 08:00:00 GMT-0400 (EDT)',
      x: 12, y: 14, term: 'bananas' },
    { date: 'Wed Jul 08 2015 08:00:00 GMT-0400 (EDT)',
      x: 13, y: 16, term: 'bananas' },
    { date: 'Wed Jul 15 2015 08:00:00 GMT-0400 (EDT)',
      x: 14, y: 19, term: 'bananas' },
    { date: 'Wed Jul 22 2015 08:00:00 GMT-0400 (EDT)',
      x: 15, y: 16, term: 'bananas' },
    { date: 'Wed Jul 29 2015 08:00:00 GMT-0400 (EDT)',
      x: 16, y: 19, term: 'bananas' },
    { date: 'Wed Aug 05 2015 08:00:00 GMT-0400 (EDT)',
      x: 17, y: 18, term: 'bananas' },
    { date: 'Wed Aug 12 2015 08:00:00 GMT-0400 (EDT)',
      x: 18, y: 18, term: 'bananas' },
    { date: 'Wed Aug 19 2015 08:00:00 GMT-0400 (EDT)',
      x: 19, y: 18, term: 'bananas' },
    { date: 'Wed Aug 26 2015 08:00:00 GMT-0400 (EDT)',
      x: 20, y: 16, term: 'bananas' },
    { date: 'Wed Sep 02 2015 08:00:00 GMT-0400 (EDT)',
      x: 21, y: 16, term: 'bananas' } ] ]

})