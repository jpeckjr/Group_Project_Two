const path = require("path");
const db = require("../models");

module.exports = function(app) {

    app.get("/search", function(req, res) {
        if (req.session.user_id) {
            res.sendFile(path.join(__dirname, "../public/views/search.html"));
        } else {
            res.redirect('/home');
        }
    });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/home.html"));
    });
    
}