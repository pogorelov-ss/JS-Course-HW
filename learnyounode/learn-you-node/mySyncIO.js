/**
 * Created by sergei on 12/27/13.
 */
var fs = require('fs');
console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length-1);