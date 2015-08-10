'use strict';
var router = require('express').Router();
module.exports = router;
//var Twit = require('twit');
//var Promise = require('bluebird');

// development environment keys
// var T = new Twit({
//     consumer_key:         '',
//     consumer_secret:      '',
//     app_only_auth:        true
// })

// var requestNewTweets = function (term, startDate, endDate, maxId) {
//     return new Promise(function (resolve, reject) {
//         var queryString = `${term}&since=${startDate}&until=${endDate}`;
//         if (maxId) queryString += `&max_id=${maxId}`
//         T.get('search/tweets', {
//             q: queryString,
//             count: 100
//         }, function (err, data, response) {
//             if (err) return reject(err);
//             console.log(data);
//             resolve({count: data.search_metadata.count, maxId: data.search_metadata.max_id});
//         });
//     });
// };

// var requestNewTweetsRecursively = function (term, startDate, endDate, maxId) {
//     return requestNewTweets(term, startDate, endDate, maxId).then(function (results) {
//         console.log(results.count);
//         if (results.count === 100) {
//             return requestNewTweetsRecursively(term, startDate, endDate, results.maxId)
//                 .then(function (secondCallResults) {
//                     return results.count + secondCallResults.count;
//                 });
//         } else {
//             return results.count;
//         }
//     });
// };

// var dates = {
//     start: '2013-01-01',
//     end: '2013-01-07'
// };

// console.log('run');

// requestNewTweetsRecursively('sweet', dates.start, dates.end).then(function (total) {
//     console.log(total);
// });

// router.post('/:term/:start/:end', function (req, res) {

//     var dates = {
//         start: '2013-01-01',
//         end: '2013-01-07'
//     };
    
//     requestNewTweetsRecursively('sweet', dates.start, dates.end).then(function (total) {
//         console.log(total);
//     });
    
// });

