// const user = require("../models/user.model");

const user = require("../models/mongo_uder.model");

class AuthController {
    async regisration(req, res) {
        // let result = await user.create({
        //     user_id: req.body.id,
        //     full_name: req.body.name,
        //     email: req.body.email,
        //     password: req.body.pasword
        // });
        const new_user = new user({
                user_id: req.body.id,
                full_name: req.body.name,
                email: req.body.email,
                password: req.body.pasword,
                assignments:{
                    projects:[1,2,3, "p1"]
                }
            }) ;
            new_user.save((err)=>{
                if(err){
                    res.send(err);
                }else{
                res.send({
                    message: "User registered successfully",
                    data: new_user
                });
            }
            })
    }

    async login(req, res) {
        
        // let result = await user.findOne({
        //     where:{
        //         email: req.body.email,
        //         password: req.body.pasword
        //     }
        // });
        // res.send({
        //     message: "Login route",
        //     user: result
        // });
        let result = await user.findOne({
            email: req.body.email,
            password: req.body.pasword
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