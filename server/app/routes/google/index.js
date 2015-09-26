'use strict';
var router = require('express').Router();
module.exports = router;
//var Promise = require('bluebird');
// var http = require('http');
// Promise.promisifyAll(http)

var request = require('request');

router.post('/:term/:start/:end', function (req, res) {
//2015-06-01
    var term = req.params.term;
    var start = req.params.start;
    var monthStart = start.slice(5,7);
    var yearStart = start.slice(0,4);
    var end = req.params.end;
    var monthEnd = end.slice(5,7);
    var monthsPassed = Number(monthEnd)-Number(monthStart)

    var dateQuery = "&date="+monthStart+"%2F"+yearStart+"%20"+monthsPassed+"m&cmpt=q&tz=Etc%2FGMT%2B4&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=300"
	var idx1;
	var idx2;

    request.get("http://www.google.com/trends/fetchComponent?hl=en-US&q="+term+dateQuery, function(err, response, body){
            if(err) console.log('error:', err)
            else {
        		var string = "'"+body.toString().replace(/\n/g, "")+"'"

        		idx1 = string.indexOf('var chartData =');
        		idx2 = string.indexOf('"height":230}');
        		var newStr = string.slice(idx1+16, idx2+14)
                var getObj = new Function('return ' + newStr);
                var obj = getObj();
        		var googleTrendData = obj.rows
                googleTrendData.forEach(function(arr){
                    arr.splice(1,2)
                    arr.splice(2,3)
                    arr.splice(3,3)
                    var y0 = 0;
                    var searchDataIndexes = [1,2] //the search frequency indexes
                    //eventually to have the name in there
                    arr[0].searches = searchDataIndexes.map(function(index) { 
                      return {index: index-1, y0: y0, y1: y0 += +arr[index]}; 
                    }); //index-1 matches to the colorScale
                    //d.total = new property on each element that should represent sum of each search value
                    arr[0].total = arr[0].searches[0].y1+arr[0].searches[1].y1//+d.searches[2].y1+d.searches[3].y1
                    // ^^^ make this flexible later but this should work for now
                });
                console.log('google trend after manipulation: ', googleTrendData)
        		res.send(googleTrendData) 
            }
    })

});

//http:www.google.com/trends/fetchComponent?hl=en-US&q=iphone&date=03%2F2015%206m&cmpt=q&tz=Etc%2FGMT%2B4&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=300

/*
google trend after manipulation:  
[
    [{
            v: Wed Apr 08 2015 08: 00: 00 GMT - 0400(EDT),
            f: 'Apr 5 – 11, 2015'
        },
        92,
        23,
        searches: [
            [Object],
            [Object]
        ],
        total: 207
    ],
    [{
            v: Wed Apr 15 2015 08: 00: 00 GMT - 0400(EDT),
            f: 'Apr 12 – 18, 2015'
        },
        90,
        22,
        searches: [
            [Object],
            [Object]
        ],
        total: 202
    ]
]
*/





