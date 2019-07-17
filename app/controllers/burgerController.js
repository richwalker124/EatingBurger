//Pull Dependencies

var express = require("express");
var router = express.Router();
var Sequelize = require("sequelize");
//import model
var db = require("../../db");
//var burgerData = require("../public/assets/js/frontendLogic.js");

//This is where routes will go.
//module.exports = function(app) {
//Default route, for homepage also grabs burger data (if it is present).
router.get("/", function(req, res) {
  db.Burger.findAll({}).then(function(results) {
    console.log(results);
    var allBurgers = {
      burger: results
    };
    res.render("index", allBurgers);
  });
});

//ADD A BURGER FUNCTION HERE
router.post("/api/addburg", function(req, res) {
  //Creates a new burger to add to db
  db.Burger.create({
    burgerName: req.body.burgername,
    eaten: false
  }).then(function(result) {
    console.log("BROKE");
    console.log(result);
    //res.json({ id: result.insertId });
    res.redirect("/");
  });
});

//Update a burger
router.get("/api/update/:id", function(req, res) {
  db.Burger.update(
    { eaten: true },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(function(result) {
    res.redirect("/");
  });
});
//};
//Exports routes for use
module.exports = router;
