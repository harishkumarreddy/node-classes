// Express Routing
const express = require('express');
const router = require('express').Router();
const APPCONFIG = require('../configs/app.config.js');
const authController = require('../controllers/auth.controller.js');
const path = require('path');

// Home route / base route
router.get('/', (req, res) => {
    res.send({
        message: `Welcome to ${APPCONFIG.title}!`,
        status: 'success',
        apis: {
            v1: '/api/v1'
        }
    });
});

// Static routs
router.use('/images', express.static(path.join(path.dirname(__dirname),"images")));

// API routs
router.use("/api/v1/register", authController.regisration);
router.use("/api/v1/login", authController.login);
router.use("/api/v1/logout", authController.logout);

//export this router to use in bootstrap file as middleware.
module.exports = router;

/*
{
    "full_name": "Harish",
    "contact": "+91-7801070710",
    "email": "mail2@email.com",
    "address": "Kondapur, Hyderabad , Telangana 500084",
    "stream": "MCA",
    "dob": "1987-09-02",
    "specilization": "IIoT"
}
*/