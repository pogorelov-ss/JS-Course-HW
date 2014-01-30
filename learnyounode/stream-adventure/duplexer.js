/**
 * Created by sergei on 1/6/14.
 */

// скопировал из решения тк пока не посмотрел его , что делать не понял )
var spawn = require('child_process').spawn;
var duplexer = require('duplexer');

module.exports = function (cmd, args) {
    var ps = spawn(cmd, args);
    return duplexer(ps.stdin, ps.stdout);
};