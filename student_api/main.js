require('dotenv').config();
const express = require("express");

const appConfig = require('./config/app.config');
const ConnectDB = require('./helpers/dbconnetor.helper');
const router = require('./routes/app.rutes');

// Constents
const app = express();

// DB connection
ConnectDB();

// Middlewares
app.use(express.json(), express.urlencoded({extended:true}))

//Routes
app.use(router);

// Boot-Up / Spinn-Up
app.listen(appConfig.port, (err)=>{
    if(err){
        console.log("App closing with status 1 due to some error.");
        console.error(err);
    }
    console.log(`App is Up and Running on http://localhost:${appConfig.port}`);
});