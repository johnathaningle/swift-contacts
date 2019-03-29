module.exports = {
    register(req, res) {
        res.send({
            message: `${req.body.email} has been logged in`
        });
    },
    login(req, res) {
        res.send({
            message: `${req.body.email} was registered`
        });
    }
}