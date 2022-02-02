const express = require("express");
const app = express();

//Controller
const adminController = require("../Controllers/adminController");

//GET methods
app.get("/admin", adminController);

module.exports = app;
