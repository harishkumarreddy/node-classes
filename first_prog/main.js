require('dotenv').config();
const express = require('express');
const DB = require('./lib/db.lib.js');
const { Sequelize } = require('sequelize');
const APPCONFIG = require('./configs/app.config.js');
const routs = require('./routes/app.routes.js');

const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(routs);

try {
    DB.authenticate();
} catch (error) {
    console.log("Unable to connect with DB.");
    console.log("Error: ", error);
}

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});