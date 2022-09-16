const whitelistedURLs = require("../config/whitelistedurls.config");
const jwtHelper = require("../helpers/jwt.helper");
const responseForemater = require('../helpers/responseForemater.helper');

const authMiddilware = (req, res, next)=> {
    console.log("targetted URL: ",req.url)
    if(whitelistedURLs.indexOf("*") > -1){
        next();
    }else{
        if(whitelistedURLs.indexOf(req.url) == -1){
            let authKey = req.headers.authorization;
            if(authKey.indexOf('Bearer') == 0){
                authKey = authKey.replace("Bearer ", "");
                console.log(authKey);
                jwtHelper.validate(authKey).then((payload) => {
                    console.log(payload);
                    next();
                }).catch((err) =>{
                    res.status(406).send(
                        responseForemater([], {
                            message: "Invalid token",
                            status_code: 406,
                            status: "Unauthorised"
                        })
                    ).end()
                })
            }else{
                res.status(406).send(
                    responseForemater([], {
                        message: "Invalid token",
                        status_code: 406,
                        status: "Unauthorised"
                    })
                ).end()
            }
        }else{
            next();
        }
    }
}

module.exports = authMiddilware;