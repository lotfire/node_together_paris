var port = '8080';
var host = '0.0.0.0';

var express = require('express');
var app = express();

app.listen(port, host); // on écoute sur un port et une uri, the port always first
console.log("it works but can't see it on a browser?");
