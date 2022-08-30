const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    full_name: {
        type: String,
        default: null
    },
    contact: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null
    },
    address: {
        type: String,
        default:null
    },
    stream: {
        type: String,
        default: "1st Class"
    },
    dob: {
        type: Date,
        default: Date.now
    },
    specilization: {
        type: String,
        default: 'CBSE'
        // accept: ['CBSC', 'SBSE', 'ICS']
    }
},{
    timestamps:true
});

const student = mongoose.model("students", studentSchema);

module.exports = student;