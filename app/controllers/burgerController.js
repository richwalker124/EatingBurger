//Pull Dependencies
var express = require('express');
var router = express.Router();
var Sequelize = require("sequelize");
//import model
var Burger = require("../../db/table.js");

//This is where routes will go.

//Default route, for homepage also grabs burger data (if it is present).
router.get("/", function(req,res){
    Burger.findAll({}).then(function(results){
        console.log(results);
        var allBurgers = {
            burgers : results
        };
        res.render("index", allBurgers);
    })
    
})

//ADD A BURGER FUNCTION HERE
router.post("/addburg", function(req,res){
    //Creates a new burger to add to db
    Burger.create([ "burgerName", "eaten"],
    [req.body.burgername, "false"],
    function(result) {
        console.log(result)
        res.json({ id: result.insertId})
    }
    )
})




//Exports routes for use
module.exports = router;