'use strict';
var router = require('express').Router();
module.exports = router;
var Promise = require('bluebird');

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

    		var string = "'"+body.toString().replace(/\n/g, "")+"'"

    		idx1 = string.indexOf('var chartData =');
    		idx2 = string.indexOf('"height":230}');
    		var newStr = string.slice(idx1+16, idx2+14)
            var getObj = new Function('return ' + newStr);
            var obj = getObj();
    		//console.log(obj.rows)
    		res.send(obj.rows) 
    })

});











