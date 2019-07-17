//Requirements
var db = require("./db");
//Need to get express to run surver
var express = require("express");

//Set up express
var app = express();
var PORT = process.env.PORT || 8080;

//Set up express for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static directory (Not currently in use but i'm sure ill put something there)
app.use(express.static("app/public"));

//Express Handlebars Stuff
var exphb = require("express-handlebars");

//Tells express to use handlebars
app.engine("handlebars", exphb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Brings in routes from out burger controller!
var routes = require("./app/controllers/burgerController.js");

app.use(routes);

var syncOptions = { force: false };

//Server listen! (starts the server)
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(`server listening on http://localhost: ${PORT}`);
  });
});
