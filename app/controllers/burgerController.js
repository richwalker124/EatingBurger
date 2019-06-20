//Pull Dependencies
var express = require('express');
var router = express.Router();
var Sequelize = require("sequelize");
//import model
var Burger = require("../../db/table.js");

//This is where routes will go.

//Default route, for homepage also grabs burger data.
router.get("/", function(req,res){
    Burger.findAll({}).then(function(results){
        console.log(results);
        var allBurgers = {
            burgers : results
        };
        
    })
    res.render("index", allBurgers);
})



module.exports = router;