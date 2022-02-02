const express = require("express");
const path = require("path");
const app = express();

//Routers
const Login = require("./Routers/login");
const Home = require("./Routers/home");
const Courses = require("./Routers/courses");
const addCourses = require("./Routers/addCourses");
const admin = require("./Routers/admin");
const teachers = require("./Routers/teachers");
const addTeacher = require("./Routers/addTeacher");
const groups = require("./Routers/groups");
const addGroup = require("./Routers/addGroup");
const students = require("./Routers/students");
const addStudent = require("./Routers/addStudent");
const teacher = require("./Routers/teacher");
const hw = require("./Routers/hw");
const student = require("./Routers/student");

app.use(Login);
app.use(Home);
app.use(admin);
app.use(Courses);
app.use(addCourses);
app.use(teachers);
app.use(addTeacher);
app.use(groups);
app.use(addGroup);
app.use(students);
app.use(addStudent);
app.use(teacher);
app.use(hw);
app.use(student);

module.exports = app;
