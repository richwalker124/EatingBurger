
var Sequelize = require("sequelize")

// Setting up our connection information
var sequelize = new Sequelize('burber', 'root', 'Dcsd138409', {
  host: 'localhost',
  port: 3306,
  dialect: "mysql"
})

module.exports = sequelize;