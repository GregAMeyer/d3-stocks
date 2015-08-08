'use strict';
var router = require('express').Router();
module.exports = router;
var Promise = require('bluebird');

// var http = require('http');
// Promise.promisifyAll(http)

var request = require('request');




router.post('/', function (req, res) {

	var idx1;
	var idx2;
//http://www.google.com/trends/trendsReport?hl=en-US&q=html5%2Cjquery&tz=Etc%2FGMT%2B4&content=1&export=1

//http://www.google.com/trends/fetchComponent?hl=en-US&q=html5,jquery&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=300 

//.indexOf('{ var chartData =')

    request.get("http://www.google.com/trends/fetchComponent?hl=en-US&q=html5,jquery&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=300", function(err, response, body){

    		var string = "'"+body.toString().replace(/\n/g, "")+"'"

    		idx1 = string.indexOf('var chartData =');
    		idx2 = string.indexOf('"height":230}');

    		console.log('index begin: ', idx1)
    		console.log('index end: ', idx2)
    		var newStr = string.slice(idx1+16, idx2+14)


var getObj = new Function('return ' + newStr);

var obj = getObj();

    		console.log(obj)
    		res.send(obj.columns[0]) 
    })

});











