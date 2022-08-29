const router = require('express').Router();
const ResFormator = require('../helpers/responseForemater.helper');
const StuRouter = require('./student.rutes');

router.get("/", (req, res, next)=>{
    res.status(200).json(ResFormator({
        api_url:"/api",
        doc_url:"/docs"
    }));
});

// Student Routes
router.use("/students", StuRouter)
module.exports = router;