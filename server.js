require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(session({
    secret: "some secret",
    cookie: {
        maxAge: 100000
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