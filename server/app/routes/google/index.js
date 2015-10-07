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

    console.log('term', term) // iphone, ipad literally as it's typed in

    request.get("http://www.google.com/trends/fetchComponent?hl=en-US&q="+term+dateQuery, function(err, response, body){
            if(err) console.log('error:', err)
            else {
            
        		var string = "'"+body.toString().replace(/\n/g, "")+"'"

        		idx1 = string.indexOf('var chartData =');
        		idx2 = string.indexOf('"height":230}');
        		var newStr = string.slice(idx1+16, idx2+14)
                var getObj = new Function('return ' + newStr);
                var obj = getObj();
        		var googleTrendData = obj.rows;

                googleTrendData.forEach(function(arr){
                    var length = arr.length;
                   
                    delete arr[0]['f']
                    arr[0].date = arr[0].v
                    delete arr[0]['v']
                    
                    if(length == 7) {
                        arr.splice(1,2)
                        arr.splice(3,3)
                        arr[0].term1 = term;
                        arr[0].term1Val = arr[1]
                        arr.pop()
                        arr.pop()
                    }
                    if(length == 11) {
                        arr.splice(1,2)
                        arr.splice(2,3)
                        arr.splice(3,3)
                        arr[0].term1 = term.split(',')[0]
                        arr[0].term2 = term.split(',')[1].replace(' ', '')
                        arr[0].term1Val = arr[1]
                        arr[0].term2Val = arr[2]  
                        arr.pop()
                        arr.pop()
                    }
                    if(length == 15) {
                        arr.splice(1,2)
                        arr.splice(2,3)
                        arr.splice(3,3)
                        arr.splice(4,3)
                        arr[0].term1 = term.split(',')[0]
                        arr[0].term2 = term.split(',')[1].replace(' ', '')
                        arr[0].term3 = term.split(',')[2].replace(' ', '')
                        arr[0].term1Val = arr[1]
                        arr[0].term2Val = arr[2]
                        arr[0].term3Val = arr[3] 
                        arr.pop()
                        arr.pop()
                        arr.pop()
                    }
                    if(length == 19) {
                        arr.splice(1,2)
                        arr.splice(2,3)
                        arr.splice(3,3)
                        arr.splice(4,3)
                        arr.splice(5,3)
                        arr[0].term1 = term.split(',')[0]
                        arr[0].term2 = term.split(',')[1].replace(' ', '')
                        arr[0].term3 = term.split(',')[2].replace(' ', '')
                        arr[0].term4 = term.split(',')[3].replace(' ', '')
                        arr[0].term1Val = arr[1]
                        arr[0].term2Val = arr[2]
                        arr[0].term3Val = arr[3] 
                        arr[0].term4Val = arr[4] 
                        arr.pop()
                        arr.pop()
                        arr.pop()
                        arr.pop()
                    }
                    if(length == 23) {
                        arr.splice(1,2)
                        arr.splice(2,3)
                        arr.splice(3,3)
                        arr.splice(4,3)
                        arr.splice(5,3)
                        arr.splice(6,3)
                        arr[0].term1 = term.split(',')[0]
                        arr[0].term2 = term.split(',')[1].replace(' ', '')
                        arr[0].term3 = term.split(',')[2].replace(' ', '')
                        arr[0].term4 = term.split(',')[3].replace(' ', '')
                        arr[0].term5 = term.split(',')[4].replace(' ', '')
                        arr[0].term1Val = arr[1]
                        arr[0].term2Val = arr[2]
                        arr[0].term3Val = arr[3] 
                        arr[0].term4Val = arr[4]
                        arr[0].term5Val = arr[5] 
                        arr.pop()
                        arr.pop()
                        arr.pop()
                        arr.pop()
                        arr.pop()
                    }
                    
// theres some extra stuff in here that doesn't need to be done
                });
            
            // console.log('googleTrendData before manip', googleTrendData);

                var newData = [];
                newData[0] = [];
                if(googleTrendData[1][0].term2Val) newData[1] = [];
                if(googleTrendData[1][0].term3Val) newData[2] = [];
                if(googleTrendData[1][0].term4Val) newData[3] = [];
                if(googleTrendData[1][0].term5Val) newData[4] = [];

                for(var i=0; i<googleTrendData.length; i++){
                    var newObj1 = {
                        date: googleTrendData[i][0].date,
                        x: i,
                        y: googleTrendData[i][0].term1Val,
                        term: googleTrendData[i][0].term1
                    }
                    if(googleTrendData[0][0].term2Val){
                        var newObj2 = {
                            date: googleTrendData[i][0].date,
                            x: i,
                            y: googleTrendData[i][0].term2Val,
                            term: googleTrendData[i][0].term2
                        }
                    newData[1].push(newObj2);
                    }
                    if(googleTrendData[0][0].term3Val){
                        var newObj3 = {
                            date: googleTrendData[i][0].date,
                            x: i,
                            y: googleTrendData[i][0].term3Val,
                            term: googleTrendData[i][0].term3
                        }
                    newData[2].push(newObj3);
                    }
                    if(googleTrendData[0][0].term4Val){
                        var newObj4 = {
                            date: googleTrendData[i][0].date,
                            x: i,
                            y: googleTrendData[i][0].term4Val,
                            term: googleTrendData[i][0].term4
                        }
                    newData[3].push(newObj4);
                    }
                    if(googleTrendData[0][0].term5Val){
                        var newObj5 = {
                            date: googleTrendData[i][0].date,
                            x: i,
                            y: googleTrendData[i][0].term5Val,
                            term: googleTrendData[i][0].term5
                        }
                    newData[4].push(newObj5);
                    }
                    
                    newData[0].push(newObj1);
                }

                // console.log('google trend after manipulation: ', googleTrendData)
                console.log('newdata for stack layout: ', newData)
        		res.send(newData)
             
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





