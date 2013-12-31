/**
 * Created by sergei on 12/29/13.
 */

var http = require('http'),
    concatStream = require('concat-stream'),
    url = process.argv[2];


http.get(url,function(response){
    response.setEncoding('utf8');
    response.pipe(/*{encoding:'string'},*/concatStream(function(data){
        console.log(data.length);
        console.log(data.toString());
    }));
});