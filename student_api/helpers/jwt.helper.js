const jwt = require('jsonwebtoken');

const sign = (data) => {
    let token = jwt.sign(data, process.env.SALT, { algorithm: 'RS256', type: 'jwt'})
    return token;
}
const validate = (token) => {
    return jwt.verify(token, process.env.SALT, { algorithm: 'RS256', type: 'jwt'}, (err, result)=>{
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