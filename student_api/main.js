require('dotenv').config();
const express = require("express");

const appConfig = require('./config/app.config');
const ConnectDB = require('./helpers/dbconnetor.helper');
const router = require('./routes/app.rutes');
const resFormat = require('./helpers/responseForemater.helper');
const log = require('./helpers/loger.helper');

// Constents
const app = express();
// log("info", "Spinning up the applicatin");
log.info("Spinning up the applicatin")

// DB connection
ConnectDB();

// Middlewares
app.use(express.json(), express.urlencoded({extended:true}));

// app.use((req, res, next)=>{
//     if (req.headers.authorization === undefined || req.headers.authorization === "" || req.headers.authorization.indexOf("Bearer ") !== 0) {
//         res.status(401).send(resFormat([], {
//             message: "Unauthorised Access",
//             status:"Unauthorised",
//             status_code:401,
//         }));
//         // let err = new Error("Unauthorised Access");
//         // err.status = 401;
//         // next(err);

//     }
// });

//Routes
log.info("Loading Routes");
app.use(router);

// Boot-Up / Spinn-Up
app.listen(appConfig.port, (err)=>{
    if(err){
        console.log("App closing with status ocde:1 due to some error.");
        console.error(err);
    }
    log.info(`App is Up and Running on http://localhost:${appConfig.port}`);
    console.log(`App is Up and Running on http://localhost:${appConfig.port}`);
});