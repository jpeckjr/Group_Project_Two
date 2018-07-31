const db = require("../models");

module.exports = function (app, cb) {

    app.post("/api/register", function (req, res) {
        res.json({ "success": "success" });
        console.log(req);
    });

    app.post("/api/login", function (req, res) {
        let token = "";
        let data = "";
        let error = "";
        db.User.findOne({
            where: {
                username: req.body.username.toLowerCase()
            }
        }).then(function (user) {
            let userObject = user.dataValues;
            console.log(userObject);
            if (userObject) {
                if (req.body.password === userObject.password) {
                    token = "nvnvnvnvnvnxcqwerqwerqwer";
                } else {
                    error = "Invalid password";
                }
            } else {
                error = "Invalid username";
            }
            res.json({"data": data, "token": token, "error": error});
        });
        
    });

    app.get("/api/search", function (req, res) {
        res.json({ "success": "success" });
        console.log(req);
    });

    app.post("/api/save", function (req, res) {
        res.json({ "success": "success" });
        console.log(req);
    });

    cb(app);
}