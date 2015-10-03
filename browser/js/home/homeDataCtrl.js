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
    
    $scope.trenddata = [ [ { date: 'Wed Apr 08 2015 08:00:00 GMT-0400 (EDT)',
      x: 0,
      y: 11,
      term: 'dude' },
    { date: 'Wed Apr 15 2015 08:00:00 GMT-0400 (EDT)',
      x: 1,
      y: 11,
      term: 'dude' },
    { date: 'Wed Apr 22 2015 08:00:00 GMT-0400 (EDT)',
      x: 2,
      y: 11,
      term: 'dude' },
    { date: 'Wed Apr 29 2015 08:00:00 GMT-0400 (EDT)',
      x: 3,
      y: 12,
      term: 'dude' },
    { date: 'Wed May 06 2015 08:00:00 GMT-0400 (EDT)',
      x: 4,
      y: 13,
      term: 'dude' },
    { date: 'Wed May 13 2015 08:00:00 GMT-0400 (EDT)',
      x: 5,
      y: 13,
      term: 'dude' },
    { date: 'Wed May 20 2015 08:00:00 GMT-0400 (EDT)',
      x: 6,
      y: 11,
      term: 'dude' },
    { date: 'Wed May 27 2015 08:00:00 GMT-0400 (EDT)',
      x: 7,
      y: 11,
      term: 'dude' },
    { date: 'Wed Jun 03 2015 08:00:00 GMT-0400 (EDT)',
      x: 8,
      y: 11,
      term: 'dude' },
    { date: 'Wed Jun 10 2015 08:00:00 GMT-0400 (EDT)',
      x: 9,
      y: 13,
      term: 'dude' },
    { date: 'Wed Jun 17 2015 08:00:00 GMT-0400 (EDT)',
      x: 10,
      y: 13,
      term: 'dude' },
    { date: 'Wed Jun 24 2015 08:00:00 GMT-0400 (EDT)',
      x: 11,
      y: 12,
      term: 'dude' },
    { date: 'Wed Jul 01 2015 08:00:00 GMT-0400 (EDT)',
      x: 12,
      y: 12,
      term: 'dude' },
    { date: 'Wed Jul 08 2015 08:00:00 GMT-0400 (EDT)',
      x: 13,
      y: 13,
      term: 'dude' },
    { date: 'Wed Jul 15 2015 08:00:00 GMT-0400 (EDT)',
      x: 14,
      y: 12,
      term: 'dude' },
    { date: 'Wed Jul 22 2015 08:00:00 GMT-0400 (EDT)',
      x: 15,
      y: 11,
      term: 'dude' },
    { date: 'Wed Jul 29 2015 08:00:00 GMT-0400 (EDT)',
      x: 16,
      y: 11,
      term: 'dude' },
    { date: 'Wed Aug 05 2015 08:00:00 GMT-0400 (EDT)',
      x: 17,
      y: 11,
      term: 'dude' },
    { date: 'Wed Aug 12 2015 08:00:00 GMT-0400 (EDT)',
      x: 18,
      y: 11,
      term: 'dude' },
    { date: 'Wed Aug 19 2015 08:00:00 GMT-0400 (EDT)',
      x: 19,
      y: 12,
      term: 'dude' },
    { date: 'Wed Aug 26 2015 08:00:00 GMT-0400 (EDT)',
      x: 20,
      y: 12,
      term: 'dude' },
    { date: 'Wed Sep 02 2015 08:00:00 GMT-0400 (EDT)',
      x: 21,
      y: 11,
      term: 'dude' } ],
  [ { date: 'Wed Apr 08 2015 08:00:00 GMT-0400 (EDT)',
      x: 0,
      y: 100,
      term: 'sweet' },
    { date: 'Wed Apr 15 2015 08:00:00 GMT-0400 (EDT)',
      x: 1,
      y: 97,
      term: 'sweet' },
    { date: 'Wed Apr 22 2015 08:00:00 GMT-0400 (EDT)',
      x: 2,
      y: 96,
      term: 'sweet' },
    { date: 'Wed Apr 29 2015 08:00:00 GMT-0400 (EDT)',
      x: 3,
      y: 97,
      term: 'sweet' },
    { date: 'Wed May 06 2015 08:00:00 GMT-0400 (EDT)',
      x: 4,
      y: 97,
      term: 'sweet' },
    { date: 'Wed May 13 2015 08:00:00 GMT-0400 (EDT)',
      x: 5,
      y: 100,
      term: 'sweet' },
    { date: 'Wed May 20 2015 08:00:00 GMT-0400 (EDT)',
      x: 6,
      y: 98,
      term: 'sweet' },
    { date: 'Wed May 27 2015 08:00:00 GMT-0400 (EDT)',
      x: 7,
      y: 97,
      term: 'sweet' },
    { date: 'Wed Jun 03 2015 08:00:00 GMT-0400 (EDT)',
      x: 8,
      y: 96,
      term: 'sweet' },
    { date: 'Wed Jun 10 2015 08:00:00 GMT-0400 (EDT)',
      x: 9,
      y: 95,
      term: 'sweet' },
    { date: 'Wed Jun 17 2015 08:00:00 GMT-0400 (EDT)',
      x: 10,
      y: 94,
      term: 'sweet' },
    { date: 'Wed Jun 24 2015 08:00:00 GMT-0400 (EDT)',
      x: 11,
      y: 96,
      term: 'sweet' },
    { date: 'Wed Jul 01 2015 08:00:00 GMT-0400 (EDT)',
      x: 12,
      y: 94,
      term: 'sweet' },
    { date: 'Wed Jul 08 2015 08:00:00 GMT-0400 (EDT)',
      x: 13,
      y: 96,
      term: 'sweet' },
    { date: 'Wed Jul 15 2015 08:00:00 GMT-0400 (EDT)',
      x: 14,
      y: 99,
      term: 'sweet' },
    { date: 'Wed Jul 22 2015 08:00:00 GMT-0400 (EDT)',
      x: 15,
      y: 96,
      term: 'sweet' },
    { date: 'Wed Jul 29 2015 08:00:00 GMT-0400 (EDT)',
      x: 16,
      y: 99,
      term: 'sweet' },
    { date: 'Wed Aug 05 2015 08:00:00 GMT-0400 (EDT)',
      x: 17,
      y: 98,
      term: 'sweet' },
    { date: 'Wed Aug 12 2015 08:00:00 GMT-0400 (EDT)',
      x: 18,
      y: 98,
      term: 'sweet' },
    { date: 'Wed Aug 19 2015 08:00:00 GMT-0400 (EDT)',
      x: 19,
      y: 98,
      term: 'sweet' },
    { date: 'Wed Aug 26 2015 08:00:00 GMT-0400 (EDT)',
      x: 20,
      y: 96,
      term: 'sweet' },
    { date: 'Wed Sep 02 2015 08:00:00 GMT-0400 (EDT)',
      x: 21,
      y: 96,
      term: 'sweet' } ] ]



  $scope.getNewData = function(stockSymbol, startDate, endDate){
		return apiFactory.getNewStockData(stockSymbol, startDate, endDate)
		.then(function(newStockData){
            $scope.stockClose = newStockData
			return $scope.stockClose;
		})
	}
	$scope.getNewTrendData = function(trendTerm, startDate, endDate){
		return apiFactory.getTrendData(trendTerm, startDate, endDate)
		.then(function(newTrendData){
            $scope.trendData = newTrendData;
			return $scope.trendData; 
		})
	}
})

/*

 // newTrendData.forEach(function(d) {
            //     var y0 = 0;
            //     var colorScaleDomain = [1,2] //-> the indexes that hold the search frequency values
            //     //d.searches = new array on each element in data (eventually to have the name in there - can do that in the back end with the req params maybe, just tack it on before sending to front end, also want to do the factory manipulation in back end at some point)
            //     d.searches = colorScaleDomain.map(function(index) { 
            //       return {index: index, y0: y0, y1: y0 += +d[index]}; 
            //     });
            //     d.y0s = d.searches.map(function(el){ return el.y0}) //all the numbers starting points will be based on
            //     d.y1s = d.searches.map(function(el){ return el.y1}) //diff between y1 and y0 is basis for height
            //     //d.total = new property on each element that should represent sum of each search value
            //     d.total = d.searches[0].y1+d.searches[1].y1//+d.searches[2].y1+d.searches[3].y1
            //     // ^^^ make this flexible later but this should work for now
            // });


[
    [{
            "v": "Wed March 04 2015 08: 00: 00 GMT - 0400(EDT)",
            // "f": 'Apr 5 – 11, 2015',
            "searches": [{
                "index": 1,
                "y0": 0,
                "y1": 80
            }, {
                "index": 2,
                "y0": 80,
                "y1": 100
            }],
            "total": 100
        },
        92,
        23
    ],[{
            "v": "Wed March 11 2015 08: 00: 00 GMT - 0400(EDT)",
            // "f": 'Apr 5 – 11, 2015',
            "searches": [{
                "index": 1,
                "y0": 0,
                "y1": 80
            }, {
                "index": 2,
                "y0": 80,
                "y1": 120
            }],
            "total": 120
        },
        92,
        23
    ],[{
            "v": "Wed March 18 2015 08: 00: 00 GMT - 0400(EDT)",
            // "f": 'Apr 5 – 11, 2015',
            "searches": [{
                "index": 1,
                "y0": 0,
                "y1": 70
            }, {
                "index": 2,
                "y0": 70,
                "y1": 105
            }],
            "total": 105
        },
        92,
        23
    ],[{
            "v": "Wed March 25 2015 08: 00: 00 GMT - 0400(EDT)",
            // "f": 'Apr 5 – 11, 2015',
            "searches": [{
                "index": 1,
                "y0": 0,
                "y1": 80
            }, {
                "index": 2,
                "y0": 80,
                "y1": 110
            }],
            "total": 110
        },
        92,
        23
    ],[{
            "v": "Wed Apr 01 2015 08: 00: 00 GMT - 0400(EDT)",
            // "f": 'Apr 5 – 11, 2015',
            "searches": [{
                "index": 1,
                "y0": 0,
                "y1": 95
            }, {
                "index": 2,
                "y0": 95,
                "y1": 115
            }],
            "total": 115
        },
        92,
        23
    ],
    [{
            "v": "Wed Apr 08 2015 08: 00: 00 GMT - 0400(EDT)",
            "f": 'Apr 5 – 11, 2015',
            "searches": [{
                "index": 1,
                "y0": 0,
                "y1": 80
            }, {
                "index": 2,
                "y0": 80,
                "y1": 110
            }],
            "total": 110
        },
        92,
        23
    ],
    [{
            "v": "Wed Apr 15 2015 08: 00: 00 GMT - 0400(EDT)",
            "f": 'Apr 12 – 18, 2015',
            "searches": [{
                "index": 1,
                "y0": 0,
                "y1": 70
            }, {
                "index": 2,
                "y0": 70,
                "y1": 140
            }],
            "total": 140
        },
        90,
        22
    ],
    [{
            "v": "Wed Apr 22 2015 08: 00: 00 GMT - 0400(EDT)",
            "f": 'Apr 19 – 25, 2015',
            "searches": [{
                "index": 1,
                "y0": 0,
                "y1": 90
            }, {
                "index": 2,
                "y0": 90,
                "y1": 120
            }],
            "total": 120
        },
        90,
        21
    ],
    [{
            "v": "Wed Apr 29 2015 08: 00: 00 GMT - 0400(EDT)",
            "f": 'Apr 26 – May 2, 2015',
            "searches": [{
                "index": 1,
                "y0": 0,
                "y1": 80
            }, {
                "index": 2,
                "y0": 80,
                "y1": 150
            }],
            "total": 150
        },
        92,
        23
    ],
    [{
            "v": "Wed May 6 2015 08: 00: 00 GMT - 0400(EDT)",
            "f": 'May 3 – 9, 2015',
            "searches": [{
                "index": 1,
                "y0": 0,
                "y1": 50
            }, {
                "index": 2,
                "y0": 50,
                "y1": 100
            }],
            "total": 100
        },
        90,
        22
    ],
    [{
            "v": "Wed May 13 2015 08: 00: 00 GMT - 0400(EDT)",
            "f": 'May 10 – 16, 2015',
            "searches": [{
                "index": 1,
                "y0": 0,
                "y1": 95
            }, {
                "index": 2,
                "y0": 95,
                "y1": 150
            }],
            "total": 150
        },
        90,
        21
    ],
    [{
            "v": "Wed May 20 2015 08: 00: 00 GMT - 0400(EDT)",
            "f": 'May 17 – 23, 2015',
            "searches": [{
                "index": 1,
                "y0": 0,
                "y1": 85
            }, {
                "index": 2,
                "y0": 85,
                "y1": 110
            }],
            "total": 110
        },
        92,
        23
    ],
    [{
            "v": "Wed May 27 2015 08: 00: 00 GMT - 0400(EDT)",
            "f": 'May 24 – 30, 2015',
            "searches": [{
                "index": 1,
                "y0": 0,
                "y1": 75
            }, {
                "index": 2,
                "y0": 75,
                "y1": 145
            }],
            "total": 145
        },
        90,
        22
    ],
    [{
            "v": "Wed June 03 2015 08: 00: 00 GMT - 0400(EDT)",
            "f": 'May 31 – June 5, 2015',
            "searches": [{
                "index": 1,
                "y0": 0,
                "y1": 95
            }, {
                "index": 2,
                "y0": 95,
                "y1": 125
            }],
            "total": 125
        },
        90,
        21
    ],
    [{
            "v": "Wed June 10 2015 08: 00: 00 GMT - 0400(EDT)",
            "f": 'June 6 – 12, 2015',
            "searches": [{
                "index": 1,
                "y0": 0,
                "y1": 75
            }, {
                "index": 2,
                "y0": 75,
                "y1": 145
            }],
            "total": 145
        },
        90,
        22
    ],
    [{
            "v": "Wed June 17 2015 08: 00: 00 GMT - 0400(EDT)",
            "f": 'June 13 – 19, 2015',
            "searches": [{
                "index": 1,
                "y0": 0,
                "y1": 55
            }, {
                "index": 2,
                "y0": 55,
                "y1": 135
            }],
            "total": 135
        },
        90,
        22
    ],
    [{
            "v": "Wed June 24 2015 08: 00: 00 GMT - 0400(EDT)",
            "f": 'June 20 – 26, 2015',
            "searches": [{
                "index": 1,
                "y0": 0,
                "y1": 70
            }, {
                "index": 2,
                "y0": 70,
                "y1": 125
            }],
            "total": 125
        },
        90,
        22
    ],
    [{
            "v": "Wed July 01 2015 08: 00: 00 GMT - 0400(EDT)",
            "f": 'June 27 – July 3, 2015',
            "searches": [{
                "index": 1,
                "y0": 0,
                "y1": 100
            }, {
                "index": 2,
                "y0": 100,
                "y1": 155
            }],
            "total": 165
        },
        90,
        22
    ],
    [{
            "v": "Wed July 08 2015 08: 00: 00 GMT - 0400(EDT)",
            "f": 'July 4 – 10, 2015',
            "searches": [{
                "index": 1,
                "y0": 0,
                "y1": 75
            }, {
                "index": 2,
                "y0": 75,
                "y1": 105
            }],
            "total": 105
        },
        90,
        22
    ],
    [{
            "v": "Wed July 15 2015 08: 00: 00 GMT - 0400(EDT)",
            "f": 'July 11 – 17, 2015',
            "searches": [{
                "index": 1,
                "y0": 0,
                "y1": 85
            }, {
                "index": 2,
                "y0": 85,
                "y1": 105
            }],
            "total": 105
        },
        90,
        22
    ],
    [{
            "v": "Wed July 22 2015 08: 00: 00 GMT - 0400(EDT)",
            "f": 'July 18 – 24, 2015',
            "searches": [{
                "index": 1,
                "y0": 0,
                "y1": 70
            }, {
                "index": 2,
                "y0": 70,
                "y1": 135
            }],
            "total": 135
        },
        90,
        22
    ],
    [{
            "v": "Wed July 29 2015 08: 00: 00 GMT - 0400(EDT)",
            "f": 'July 25 – 31, 2015',
            "searches": [{
                "index": 1,
                "y0": 0,
                "y1": 80
            }, {
                "index": 2,
                "y0": 80,
                "y1": 120
            }],
            "total": 120
        },
        90,
        22
    ],
    [{
            "v": "Wed Aug 05 2015 08: 00: 00 GMT - 0400(EDT)",
            "f": 'August 1 – 7, 2015',
            "searches": [{
                "index": 1,
                "y0": 0,
                "y1": 60
            }, {
                "index": 2,
                "y0": 60,
                "y1": 120
            }],
            "total": 120
        },
        90,
        22
    ],
    [{
            "v": "Wed Aug 12 2015 08: 00: 00 GMT - 0400(EDT)",
            "f": 'August 8 – 14, 2015',
            "searches": [{
                "index": 1,
                "y0": 0,
                "y1": 60
            }, {
                "index": 2,
                "y0": 60,
                "y1": 120
            }],
            "total": 120
        },
        90,
        22
    ],
    [{
            "v": "Wed Aug 19 2015 08: 00: 00 GMT - 0400(EDT)",
            "f": 'August 15 – 21, 2015',
            "searches": [{
                "index": 1,
                "y0": 0,
                "y1": 65
            }, {
                "index": 2,
                "y0": 65,
                "y1": 110
            }],
            "total": 110
        },
        90,
        22
    ],
    [{
            "v": "Wed Aug 26 2015 08: 00: 00 GMT - 0400(EDT)",
            "f": 'August 22 – 28, 2015',
            "searches": [{
                "index": 1,
                "y0": 0,
                "y1": 70
            }, {
                "index": 2,
                "y0": 70,
                "y1": 130
            }],
            "total": 130
        },
        90,
        22
    ],
]


$scope.trenddata = [[{
        "v": "2015-03-04T13:00:00.000Z",
        "f": "Mar 1 – 7, 2015"}, 89, 80],[{
        "v": "2015-03-11T12:00:00.000Z",
        "f": "Mar 8 – 14, 2015"}, 96, 80],[{
        "v": "2015-03-18T12:00:00.000Z",
        "f": "Mar 15 – 21, 2015"}, 92, 80],[{
        "v": "2015-03-25T12:00:00.000Z",
        "f": "Mar 22 – 28, 2015"}, 93, 80],[{
        "v": "2015-04-01T12:00:00.000Z",
        "f": "Mar 29 – Apr 4, 2015"}, 96, 80],[{
        "v": "2015-04-08T12:00:00.000Z",
        "f": "Apr 5 – 11, 2015"}, 92, 80],[{
        "v": "2015-04-15T12:00:00.000Z",
        "f": "Apr 12 – 18, 2015"}, 95, 80],[{
        "v": "2015-04-22T12:00:00.000Z",
        "f": "Apr 19 – 25, 2015"}, 98, 80],[{
        "v": "2015-04-29T12:00:00.000Z",
        "f": "Apr 26 – May 2, 2015"}, 92, 80],[{
        "v": "2015-05-06T12:00:00.000Z",
        "f": "May 3 – 9, 2015"}, 95, 80],[{
        "v": "2015-05-13T12:00:00.000Z",
        "f": "May 10 – 16, 2015"}, 99, 80],[{
        "v": "2015-05-20T12:00:00.000Z",
        "f": "May 17 – 23, 2015"}, 98, 80],[{
        "v": "2015-05-27T12:00:00.000Z",
        "f": "May 24 – 30, 2015"}, 95, 80],[{
        "v": "2015-06-03T12:00:00.000Z",
        "f": "May 31 – Jun 6, 2015"}, 100, 80],[{
        "v": "2015-06-10T12:00:00.000Z",
        "f": "Jun 7 – 13, 2015"}, 98, 80],[{
        "v": "2015-06-17T12:00:00.000Z",
        "f": "Jun 14 – 20, 2015"}, 99, 80],[{
        "v": "2015-06-24T12:00:00.000Z",
        "f": "Jun 21 – 27, 2015"}, 94, 80],[{
        "v": "2015-07-01T12:00:00.000Z",
        "f": "Jun 28 – Jul 4, 2015"}, 94, 80],[{
        "v": "2015-07-08T12:00:00.000Z",
        "f": "Jul 5 – 11, 2015"}, 98, 80],[{
        "v": "2015-07-15T12:00:00.000Z",
        "f": "Ju1 12 – 18, 2015"}, 99, 80],[{
        "v": "2015-07-22T12:00:00.000Z",
        "f": "Jul 19 – 25, 2015"}, 94, 80],[{
        "v": "2015-07-29T12:00:00.000Z",
        "f": "Jul 26 – Aug 2, 2015"}, 94, 80],[{
        "v": "2015-08-06T12:00:00.000Z",
        "f": "Aug 3 – 09, 2015"}, 98, 80],[{
        "v": "2015-08-13T12:00:00.000Z",
        "f": "Aug 10 – 16, 2015"}, 99, 80],[{
        "v": "2015-08-20T12:00:00.000Z",
        "f": "Aug 17 – 24, 2015"}, 94, 80],[{
        "v": "2015-08-27T12:00:00.000Z",
        "f": "Aug 25 – 30, 2015"}, 94, 80]];
        */