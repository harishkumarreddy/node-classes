const ReqFormater = require('../helpers/responseForemater.helper')
const student = require('../models/studet.model');
const studentValidation = require('../validations/student.validation');
const { sign } = require('../helpers/jwt.helper');

class AuthController {
    async login(req, res, next) {
        try {
            let stuData = await student.findOne(req.body);
            let token = await sign({
                full_name: stuData.full_name,
                contact: stuData.contact,
                email: stuData.email,
                address: stuData.address,
                stream: stuData.stream,
                dob: stuData.dob,
                specilization: stuData.specilization,
                id: stuData._id.toString()
            });
            res.status(200).send(ReqFormater(
                {
                    token: token
                },
                {
                    status_code: 200,
                    message: "Success"
                }
            ));
        } catch (err) {
            err.status = 400;
            next(err);
        }
    }

    async logout(req, res, next) {
        try {
            let stuData = await student.findById(req.params.id);
            res.status(200).send(ReqFormater(
                stuData,
                {
                    status_code: 200,
                    message: "Success"
                }
            ));
        } catch (err) {
            err.status = 400;
            next(err);
        }

    }

    async register(req, res, next) {
        try {
            const validation = studentValidation.validate(req.body, {abortEarly:false})
            if(validation.error){
                // res.json(validation.error);
                // let errObj = {};
                // for(let i =0; i < validation.error.details.length; i++){
                //     let key = validation.error.details[i].context.key;
                //     errObj[key] = validation.error.details[i].message;
                // }

                // let errObj = [];
                // for(let i =0; i < validation.error.details.length; i++){
                //     let key = validation.error.details[i].context.key;
                //     let err = {}
                //     err[key] = validation.error.details[i].message;
                //     errObj.push(err);
                // }

                let errObj = [];
                errObj = validation.error.details.map((er)=>{
                    let key = er.context.key;
                    let err = {};
                    err[key] = er.message
                    return err;
                });

                const err = new Error();
                err.message = errObj;
                err.status = 422;
                // next(err);
                throw err;
            }
            
            // const valiedData = await studentValidation.validateAsync(req.body, {abortEarly:false});
            // console.log(valiedData);
            let stuData = new student({
                full_name: req.body.full_name,
                contact: req.body.contact,
                email: req.body.email,
                address: req.body.address,
                stream: req.body.stream,
                dob: new Date(req.body.dob),
                specilization: req.body.specilization
            });

            stuData.save()
                .then(rec => {
                    res.status(201).send(ReqFormater(
                        rec,
                        {
                            status_code: 201,
                            message: "Created successfully"
                        }
                    ));
                })
                .catch(err => {
                    err.status = 400;
                    // next(err);
                    throw err
                });
        } catch (error) {
            // res.json(error);
            next(error);
        }
    }

}

module.exports = new AuthController();