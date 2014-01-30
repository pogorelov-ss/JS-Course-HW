/**
 * Created by sergei on 1/2/14.
 */
var concat = require('concat-stream');

function revers (data) {
    console.log(data.toString().split('').reverse().join(''))
    //а как сделать дальше потоком ? или этот модуль так не умеет ?
}
process.stdin.pipe(concat(revers));
