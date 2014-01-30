/**
 * Created by sergei on 1/6/14.
 */
var ws = require('websocket-stream');
var stream = ws('ws://localhost:8000');


stream.write('hello\n');
stream.end();