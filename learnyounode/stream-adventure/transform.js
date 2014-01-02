/**
 * Created by sergei on 1/2/14.
 */
var through = require('through'),
    tr = through(transform);

function transform (buf) {
    this.queue(buf.toString().toUpperCase())
};


process.stdin.pipe(tr).pipe(process.stdout);