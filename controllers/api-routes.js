const db = require("../models");

module.exports = function (app, cb) {

    app.post("/api/register", function (req, res) {
        let success = "false";
        let error = "";
        let username = "";
        db.User.findOne({
            where: {
                username: req.body.username.toLowerCase()
            }
        }).then(function (user) {
            console.log(user);
            if (user) {
                error = "username already exists, pick another";
                username = user.dataValues.username;
                res.json({ "success": success, "error": error, "username": username });
            } else {
                db.User.create(req.body).then(function(dbPost) {
                    username = dbPost.dataValues.username;
                    success = "true";
                    res.json({ "success": success, "error": error, "username": username });
                });
            }
        });

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