/**
 * Created by sergei on 1/2/14.
 */
var http = require('http'),
    url = require('url'),
    port = process.argv[2],
    server = http.createServer(function(req,res){

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(getResponse(url.parse(req.url,true)));
            res.end();
    });
function getResponse (parsedUrl){
    var dateTime = new Date(parsedUrl.query.iso);
    if (parsedUrl.pathname ==='/api/parsetime'){
        return JSON.stringify({
            hour : dateTime.getHours() ,
            minute : dateTime.getMinutes() ,
            second : dateTime.getSeconds()
        })
    }
    if (parsedUrl.pathname ==='/api/unixtime'){
        return JSON.stringify({ unixtime : dateTime.getTime()});
    }
    return 'api path error 404?'
}
server.listen(port);