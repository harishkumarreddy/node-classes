const router = require('express').Router();
const authRoutes = require('./auth.routes.js');

router.use("/v1/auth", authRoutes);

module.exports = router;