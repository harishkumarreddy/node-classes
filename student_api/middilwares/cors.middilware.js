const blocklistIPs = require("../config/blocklistips.config");
const responseForemater = require('../helpers/responseForemater.helper');

const cors = (req, res, next) => {
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(ip)
    if(blocklistIPs.length){
        
        if(blocklistIPs.indexOf(ip) > -1 ){
            res.status(400).send(
                responseForemater([], {
                    message: "You are ristricted to use our services due to mal-function. Kindly reach our service agent.",
                    status_code: 400,
                    status: "Unauthorised"
                })
            ).end()
        }else{
            next();
        }
    }else{
        next();
    }
    
}

module.exports = cors;