const { DataTypes } = require('sequelize');
const db = require('../lib/db.lib');

const user = db.define("users", {
    user_id:{
        type: DataTypes.INET,
        primaryKey: true,
        autoIncrement: true
    },
    full_name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
});

module.exports = user;
