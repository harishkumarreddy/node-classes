const joi = require('joi');

const studentValidation = joi.object({
    full_name: joi.string().min(3).max(100).required(),
    contact: joi.string().min(6).max(25).required(),
    email: joi.string().email().min(3).max(100).required(),
    address: joi.string().min(5).max(255).required(),
    stream: joi.string().min(3).max(100).required(),
    dob: joi.date().required(),
    specilization:joi.string().valid('CBSC', 'SBSE', 'ICS').required()
});

module.exports = studentValidation;