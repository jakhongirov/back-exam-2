const express = require("express");
const app = express();

//Controller
const studentController = require("../Controllers/studentController");

//GET methods
app.get("/student", studentController);

module.exports = app;
