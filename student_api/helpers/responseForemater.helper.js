const ReqFormater = (body, options)=>{
    if(options === undefined){
        options = {
            message: "Welcome to the Student API",
            status:"Success",
            status_code:200,
        }
    }

    return {
        message: options.message,
        status_code:options.status_code,
        status:options.status,
        body:(Array.isArray(body))? body : [body]
    }
}

module.exports = ReqFormater;