/**
 * Created by sergei on 1/1/14.
 */
var http = require('http'),
    fs = require('fs'),
    port = process.argv[2],
    filePath = process.argv[3],
    scr = fs.createReadStream(filePath),
    server = http.createServer(function(req,res){
        scr.pipe(res);
    });

server.listen(port);