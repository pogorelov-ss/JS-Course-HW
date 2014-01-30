/**
 * Created by sergei on 1/6/14.
 */
var duplexer = require('duplexer'),
    through = require('through');

module.exports = function(counter){
    var input = through(),
        counts={};
}