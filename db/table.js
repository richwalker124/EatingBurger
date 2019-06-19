//Require the sequelize
var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

//Create Table
var Burger = sequelize.define("burber", {
    burgerName: Sequelize.STRING,
    eaten: Sequelize.STRING,

})

Burger.sync();

module.exports = Burger();