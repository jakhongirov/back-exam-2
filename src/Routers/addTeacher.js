const express = require("express");
const app = express();

//Controller
const {
    GETaddTeachersController,
    POSTaddTeachersController,
} = require("../Controllers/addTeacherController");
//GET methods
app.get("/addTeachers", GETaddTeachersController);
app.post("/newTeachers", POSTaddTeachersController);

module.exports = app;