var port = '8080';
var host = '0.0.0.0';

var express = require('express');
var app = express();

var rules = require('./app/index.js'); // we use "./" to tell it's a file and not a npm package
app.use(rules);

app.listen(port, host); // on écoute sur un port et une uri, the port always first
console.log("it works but can't see it on a browser?");
console.log('Server running %s:%d...', host, port);
