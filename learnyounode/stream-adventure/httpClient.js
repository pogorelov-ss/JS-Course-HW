/**
 * Created by sergei on 1/4/14.
 */
var request = require('request');

process.stdin.pipe(request.post('http://localhost:8000')).pipe(process.stdout)