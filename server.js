require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");
const sessionSecret = process.env.SESSION_SECRET || "some secret";

app.use(session({
    secret: sessionSecret,
    cookie: {
        maxAge: 604800000
    }
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));

let apiRoutes = require("./controllers/api-routes.js");
let htmlRoutes = require("./controllers/html-routes.js");
apiRoutes(app, htmlRoutes);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Listening on port " + PORT);
    });
});