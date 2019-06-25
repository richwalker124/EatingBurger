//Require the sequelize
// var Sequelize = require("sequelize");
// var sequelize = require("../app/config/connection.js");

// //Create Table
// var Burger = sequelize.define("burber", {
//     burgerName: Sequelize.STRING,
//     eaten: Sequelize.STRING,

// })

// Burger.sync();

// module.exports = Burger;

module.exports = function (sequelize, DataTypes){
    var Burber = sequelize.define("Burger", {
        burgerName: DataTypes.STRING,
        eaten: DataTypes.STRING
    });
    return Burber;
};