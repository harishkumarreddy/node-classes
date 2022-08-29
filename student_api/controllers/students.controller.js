const ReqFormater = require('../helpers/responseForemater.helper');

class StudentController {
    getAll(req, res, next) {
        res.status(200).send(ReqFormater(
            [],
            {
                status_code: 200,
                message: "Success"
            }
        ));
    }

    getById(req, res, next) {
        res.status(200).send(ReqFormater(
            [],
            {
                status_code: 200,
                message: "Success"
            }
        ));
    }

    create(req, res, next) {
        res.status(201).send(ReqFormater(
            [],
            {
                status_code: 201,
                message: "Created successfully"
            }
        ));
    }

    update(req, res, next) {
        res.status(200).send(ReqFormater(
            [],
            {
                status_code: 200,
                message: "Updated successfully"
            }
        ));
    }

    delete(req, res, next) {
        res.status(200).send(ReqFormater(
            [],
            {
                status_code: 200,
                message: "Deleted successfully"
            }
        ));
    }
}

module.exports = new StudentController();