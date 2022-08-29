// const { MongoClient, ServerApiVersion } = require('mongodb');

// const client = new MongoClient(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


// module.exports=client;

const mongoose = require('mongoose');

const connectDB = () => {
    console.log("Connecting to DB...");
    mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then((result) => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    });
}

module.exports = connectDB;
