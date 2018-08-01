const db = require("../models");
const crypto = require("crypto");

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
            
            if (user) {
                error = "username already exists, pick another";
                username = user.dataValues.username;
                res.json({ "success": success, "error": error, "username": username });
            } else {
                let newUser = req.body;
                newUser["username"] = newUser.username.toLowerCase();

                let password_salt = crypto.randomBytes(132).toString('hex').slice(0, 132);
                let hash = crypto.createHmac("sha512", password_salt);
                hash.update(req.body.password);
                let password_hash = hash.digest('hex');
                newUser["password"] = password_hash;
                newUser["password_salt"] = password_salt;

                db.User.create(newUser).then(function(dbPost) {
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
            if (userObject) {
                let hash = crypto.createHmac("sha512", userObject.password_salt);
                hash.update(req.body.password);
                if (hash.digest('hex') === userObject.password) {
                    let currentSession = req.session;
                    currentSession.username = userObject.username;
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

    app.get("/api/logout", function (req, res) {
        req.session.destroy(function (err) {
            if (err)
                console.log(err);
            else
                res.redirect('/');
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