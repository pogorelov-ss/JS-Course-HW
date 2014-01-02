/**
 * Created by sergei on 1/2/14.
 */
var split = require('split'),
    through = require('through'),
    tr = through(transform),
    count = 0;

function transform (buf) {
    var line = buf.toString()+'\n';
    this.queue(count % 2 ===0
        ? line.toLowerCase()
        : line.toUpperCase());
    count++;
};

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
