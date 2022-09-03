const ReqFormater = require('../helpers/responseForemater.helper')
const student = require('../models/studet.model');
const studentValidation = require('../validations/student.validation');

class StudentController {
    async getAll(req, res, next) {
        try {
            let stuData = await student.find();
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

    async getById(req, res, next) {
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

    async create(req, res, next) {
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

    update(req, res, next) {
        student.updateOne(
            {
                "_id": req.params.id
            }, // Filter
            {
                $set: {  // data
                    full_name: req.body.full_name,
                    contact: req.body.contact,
                    email: req.body.email,
                    address: req.body.address,
                    stream: req.body.stream,
                    dob: new Date(req.body.dob),
                    specilization: req.body.specilization
                }
            }
        )
            .then(rec => {
                res.status(200).send(ReqFormater(
                    rec,
                    {
                        status_code: 200,
                        message: "Updated successfully"
                    }
                ));
            })
            .catch(err => {
                err.status = 400;
                next(err);
            });
    }

    async delete(req, res, next) {
        let stuData = await student.deleteOne({ "_id": req.params.id });
        res.status(200).send(ReqFormater(
            stuData,
            {
                status_code: 200,
                message: "Deleted successfully"
            }
        ));
    }
}

module.exports = new StudentController();