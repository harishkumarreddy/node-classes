const jwt = require('jsonwebtoken');

const sign = (data) => {
    // let token = jwt.sign(data, process.env.SALT, { algorithm: 'RS256'});
    let token = jwt.sign(data, process.env.SALT);
    return token;
}
const validate = (token) => {
    //jwt.verify(token, process.env.SALT, { algorithm: 'RS256'}, (err, result)=>{
    return jwt.verify(token, process.env.SALT, (err, result)=>{
        return new Promise((resolve, reject)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    });
}

module.exports = {
    sign: sign,
    validate: validate
}