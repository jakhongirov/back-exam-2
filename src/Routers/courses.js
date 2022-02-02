const express = require("express");
const app = express();

//Controller
const coursesConteroller = require("../Controllers/coursesController");

//GET methods
app.get("/courses", coursesConteroller);

module.exports = app;
