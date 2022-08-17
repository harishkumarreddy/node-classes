require('dotenv').config();
const express = require('express');
const APPCONFIG = require('./configs/app.config.js');
const routs = require('./routes/app.routes.js');

const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(routs);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});