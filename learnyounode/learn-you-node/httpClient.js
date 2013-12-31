/**
 * Created by sergei on 12/29/13.
 */
var http = require('http');
var url = process.argv[2];
http.get(url,function(response){
    response.setEncoding('utf8');
    response.on('data',console.log);
    response.on('error',console.error);
});