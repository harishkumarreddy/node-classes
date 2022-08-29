const StuRouter = require('express').Router();
const studentsController = require('../controllers/students.controller');

StuRouter.get("/all", studentsController.getAll);
StuRouter.get("/:id", studentsController.getById);
StuRouter.post("/create", studentsController.create);
StuRouter.put("/update/:id", studentsController.update);
StuRouter.delete("/delete/:id", studentsController.delete);

module.exports = StuRouter;