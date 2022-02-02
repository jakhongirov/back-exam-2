const express = require("express");
const app = express();

//Controller
const teacherController = require("../Controllers/teachersController");

//GET methods
app.get("/teachers", teacherController);

module.exports = app;
