var express = require('express');
var handlebars = require('express-handlebars');
var app = express();

var motivations = require('motivations');
var pickOne = require('pick-one');
var catImages = [1,2,3,4,5,6];

/* HOW TO WRITE RULES */
// app.action(route location (a string), function(req, res){
//   res.send("something");
// });

// get() is a function with 2 mandatory arguments:
//   1st - the route
//   2nd - a callback function (what to do when the event happens)

app.use(express.static('./app/public'));

// app.get('/', function(request, response){
//   response.send("<h1>hello cats</h1>");
// });

app.get('/about', function( req, res) {
  res.send("<div><p>i'm just me!</p></div>");
});

// app.get('/motivations', function( req, res) {
//   res.send(motivations);
// });

app.get('/motivation', function( req, res) {
  res.send(pickOne(motivations));
});
/* Setup of Handlebars template engine*/
app.engine('handlebars', handlebars({
  defaultLayout: 'main',
  layoutsDir: './app/views/layouts'
}));

app.set('views', './app/views');
//on peut aussi écrire:
// app.set('views', __dirname + '/views');
 /*
  mais attention car __dirname fait référence au dossier où le script est en cours d'éxecution,
  e.g si j'éxecute c:\user > node c:\app\server.js __dirname fait référence à <user> et non <app> d'où une erreur si <user> ne contient pas des fichiers nécessaire à l'exécution de server.js
*/
app.set('view engine', 'handlebars');
/* end of Setup of Handlebars template engine*/


app.get('/', function (req, res) {
  var motivation = pickOne(motivations);
  var image = pickOne(catImages);
  res.render('motivation', {motivation: motivation, image: image}); //la propriété de cette objet est ce qu'on envoie à motivations.hbs
   });
module.exports = app; // the name doesn't matter, we're exporting the value of app as a module
