const db = require("../models");

module.exports = function(app, cb) {

    app.post("/api/register", function(req, res) {
        res.json({"success":"success"});
        console.log(req);
    });

    app.post("/api/login", function(req, res) {
        res.json({"success":"success"});
        console.log(req);
    });
    
    app.get("/api/search", function(req, res) {
        res.json({"success":"success"});
        console.log(req);
    });

    app.post("/api/save", function(req, res) {
        res.json({"success":"success"});
        console.log(req);
    });

    cb(app);
}