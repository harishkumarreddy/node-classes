const mongoose = require("mongoose");
const appConfig = require("../config/app.config");

const ConnectDB = () =>{
    const dbuser = (appConfig.dbuser == "" && appConfig.dbpassword=="")? '' : `${appConfig.dbuser}:${appConfig.dbpassword}`
    let mongoURI = `mongodb://${dbuser}@${appConfig.dbhost}:${appConfig.dbport}/${appConfig.dbname}?retryWrites=true&w=majority`;
    if(dbuser===""){
        mongoURI = `mongodb://${appConfig.dbhost}:${appConfig.dbport}/${appConfig.dbname}?retryWrites=true&w=majority`;
    }
    // dbURI = "mongodb://user:password@localhost:27017/db?retryWrites=true&w=majority"
    mongoose.connect(mongoURI, (err)=>{
        if(err){
            console.log("Failed to connect with DB. exiting with status code 1");
            console.error(err);
            process.exit();
        }

        console.log("DB Connected successfully. URI:"+ mongoURI);
    })
}

module.exports = ConnectDB;
