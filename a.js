const async = require('async')
async.series([
    function(callback) {
        console.log('one')
        callback(null, 'one');
    },
    function(callback) {
        console.log('two')
        callback(null, 'two');
    }
],
// optional callback
function(err, results) {
    console.log(results)
});
