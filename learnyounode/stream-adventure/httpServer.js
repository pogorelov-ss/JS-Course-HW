/**
 * Created by sergei on 1/4/14.
 */

var http = require('http'),
    through = require('through'),
    port = process.argv[2],
    server = http.createServer(function(req,res){
        debugger;
        var tr = through(transform); //а так не работает ... почему !?
        function transform (buf) {
            debugger;
            this.queue(buf.toString().toUpperCase())
        }
        if (req.method != 'POST'){
            return res.end('send me a POST\n');
        }
        else{
            //req.pipe(through(transform)).pipe(res);
            req.pipe(tr).pipe(res);// так не работает
        }
    });
server.listen(port);

/*
var http = require('http');
var through = require('through');

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(through(function (buf) {
            this.queue(buf.toString().toUpperCase());
        })).pipe(res);
    }
    else res.end('send me a POST\n');
});
server.listen(parseInt(process.argv[2]));
*/