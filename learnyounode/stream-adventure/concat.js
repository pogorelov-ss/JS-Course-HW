/**
 * Created by sergei on 1/2/14.
 */
var concat = require('concat-stream');

function revers (data) {
    console.log(data.toString().split('').reverse().join(''))
}
process.stdin.pipe(concat(revers));
