const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
    "test",
    "root",
    "",
    {
        host: "localhost",
        port: 3306,
        dialect: "mysql"
    }
)

