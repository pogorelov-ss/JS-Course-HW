/**
 * Created by sergei on 1/6/14.
 */
var trumpet = require('trumpet'),
    through = require('through'),
    tr = trumpet(),
    selectedHtmlStream = tr.select('.loud').createStream();

function transform (buf) {
    this.queue(buf.toString().toUpperCase())
};

selectedHtmlStream.pipe(through(transform)).pipe(selectedHtmlStream);

process.stdin.pipe(tr).pipe(process.stdout);

/*
var trumpet = require('trumpet');
 var through = require('through');
 var tr = trumpet();

 var loud = tr.select('.loud').createStream();
 loud.pipe(through(function (buf) {
 this.queue(buf.toString().toUpperCase());
 })).pipe(loud);

 process.stdin.pipe(tr).pipe(process.stdout);*/