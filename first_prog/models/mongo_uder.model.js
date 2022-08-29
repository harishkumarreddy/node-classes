const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({
    "full_name": String,
    "email": String,
    "password": String,
    "assignments": Object
},{timestamps: true});
let user = mongoose.model('User', user_schema);
module.exports = user;