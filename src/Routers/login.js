const express = require("express");
const app = express();

//middlewares
const authorize = require("../middlewares/authorize");

//Controller
const loginController = require("../Controllers/loginController");

//GET methods
app.post("/login", authorize, loginController);

module.exports = app;
