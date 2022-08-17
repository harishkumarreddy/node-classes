const router = require('express').Router();
const AuthController = require('../../controllers/auth.controller.js');

router.post("/register", AuthController.regisration);

router.post("/login", AuthController.login);

router.get("/logout", AuthController.logout);

module.exports = router;