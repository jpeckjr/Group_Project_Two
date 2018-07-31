const path = require("path");
const db = require("../models");

module.exports = function(app) {

    app.get("/search", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/search.html"));
    });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/home.html"));
    });
    
}