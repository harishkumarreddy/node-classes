const ReqFormater = require('../helpers/responseForemater.helper')
const student = require('../models/studet.model');
const ObjectID = require('mongoose').ObjectID;

class StudentController {
    async getAll(req, res, next) {
        let stuData = await student.find();
        res.status(200).send(ReqFormater(
            stuData,
            {
                status_code: 200,
                message: "Success"
            }
        ));
    }

    async getById(req, res, next) {
        let stuData = await student.findById(req.params.id);
        res.status(200).send(ReqFormater(
            stuData,
            {
                status_code: 200,
                message: "Success"
            }
        ));
    }

    create(req, res, next) {
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
                .catch(err =>{
                    console.log(err);
                    res.status(400).send(ReqFormater(
                        [],
                        {
                            status_code: 400,
                            message: "Failed to create record"
                        }
                    ));
                });
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
                    console.log(err);
                    res.status(400).send(ReqFormater(
                        [],
                        {
                            status_code: 400,
                            message: "Failed to update record"
                        }
                    )); 
                });
    }

    async delete(req, res, next) {
        let stuData = await student.deleteOne({"_id": req.params.id});
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