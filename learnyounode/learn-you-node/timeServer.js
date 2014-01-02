/**
 * Created by sergei on 1/1/14.
 */
var net =require('net'),
    port = process.argv[2],
    moment = require('moment'),
    server = net.createServer(function(socket){
        socket.write(moment().format('YYYY-MM-DD HH:mm'));
        socket.end('\n');
    });

server.listen(port);
