const router = require('express').Router();
const ResFormator = require('../helpers/responseForemater.helper');
const StuRouter = require('./student.rutes');
const log = require('../helpers/loger.helper');
const authRouter = require('./auth.rutes ');

router.get("/", (req, res, next)=>{
    res.status(200).json(ResFormator({
        api_url:"/api",
        doc_url:"/docs"
    }));
});

router.use("/auth", authRouter);
// Student Routes
router.use("/students", StuRouter);

// whild-card rout
router.all("*", (req, res, next) =>{
    const error = new Error("Rout nout found");
    error.status = 404;
    next(error);
});

// Exception middleware
router.use((err, req, res, next) =>{
    // if(err.isJo)
    const errStatus = err.status || 500;
    console.error(err);
    log.debug(err)
    res.status(errStatus).json(
        ResFormator([], {
                status_code: errStatus,
                message: err.message || "Currently we are having internal system erroer and we are investigating this."
            }));
    res.end();
});
module.exports = router;