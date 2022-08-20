const express = require("express");
const app = express();
const userRoute = require("./Routes/user.route.js");

var cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json([]));
app.use("/user", userRoute);

module.exports = app;
