const fs = require("../lib/fs");
const path = require("path");

const users = new fs(path.resolve(__dirname, "../model/users.json"));
const studentsData = JSON.parse(users.read()).filter((e) => e.role == "student");

const studentsController = (req, res) => {
  res.render("students", { students: studentsData });
};

module.exports = studentsController;
