require('dotenv').config();
const express = require('express');
const DB = require('./lib/db.lib.js');
const { Sequelize } = require('sequelize');
const APPCONFIG = require('./configs/app.config.js');
const routs = require('./routes/app.routes.js');
const mongoose = require('mongoose');
const client = require('./lib/mongo.lib.js');
const connectDB = require('./lib/mongo.lib.js');

const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then((result) => {
    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });
}).catch(err => {
    console.log(err);
});

