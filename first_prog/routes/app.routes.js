// Express Routing
const router = require('express').Router();
const APPCONFIG = require('../configs/app.config.js');
const staticRouts = require('./static.routs.js');
const v1Routs = require('./v1/v1.routes.js');

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
router.use(staticRouts);

// API routs
router.use("/api", v1Routs);

//export this router to use in bootstrap file as middleware.
module.exports = router;