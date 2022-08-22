const user = require("../models/user.model");

class AuthController {
    async regisration(req, res) {
        let result = await user.create({
            user_id: req.body.id,
            full_name: req.body.name,
            email: req.body.email,
            password: req.body.pasword
        });
        res.send({
            message: "User registered successfully",
            data: result
        });
    }

    async login(req, res) {
        
        let result = await user.findOne({
            where:{
                email: req.body.email,
                password: req.body.pasword
            }
        });
        res.send({
            message: "Login route",
            user: result
        });
    }

    logout(req, res) {
        res.send({
            message: "Logout route",
            status: 200,
        });
    }

    getmyAge (req,res){
        
    }
}

module.exports = new AuthController();