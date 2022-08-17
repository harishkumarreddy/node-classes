
class AuthController {
    regisration(req, res) {
        console.log(req.body)
        res.send({
            message: "Register route from AuthController",
            data: req.body
        });
    }

    login(req, res) {
        res.send({
            message: "Login route"
        });
    }

    logout(req, res) {
        res.send({
            message: "Logout route"
        });
    }
}

module.exports = new AuthController();