var express = require('express');
var app = express();

/* HOW TO WRITE RULES */
// app.action(route location (a string), function(req, res){
//   res.send("something");
// });

// get() is a function with 2 mandatory arguments:
//   1st - the route
//   2nd - a callback function (what to do when the event happens)

app.get('/', function(request, response){
  response.send("<h1>hello cats</h1>");
});

app.get('/about', function( req, res) {
  res.send("<div><p>i'm just me!</p></div>");
});

module.exports = app;
// the name doesn't matter, we're exporting the value of app as a module
