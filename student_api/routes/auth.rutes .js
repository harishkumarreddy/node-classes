const authController = require('../controllers/auth.controller');

const authRouter = require('express').Router();

authRouter.post("/login", authController.login);
authRouter.get("/logout", authController.logout);
authRouter.post("/register", authController.register);

module.exports = authRouter;