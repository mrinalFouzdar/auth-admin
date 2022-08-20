const express = require("express");
const app = express();
const userController = require("../Controllers/user");
app.post("/create", userController.createUser);
app.post("/login", userController.loginUser);
app.get("/getuser", userController.getUser);
module.exports = app;
