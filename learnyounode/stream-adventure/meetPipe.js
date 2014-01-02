/**
 * Created by sergei on 1/2/14.
 */
var fs = require('fs'),
    inputFile = process.argv[2];

fs.createReadStream(inputFile).pipe(process.stdout);