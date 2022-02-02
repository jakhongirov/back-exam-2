const { verify } = require("../lib/jwt");
const fs = require("../lib/fs");
const path = require("path");

const courses = new fs(path.resolve(__dirname, "../model/courses.json"));
const groups = new fs(path.resolve(__dirname, "../model/groups.json"));
const users = new fs(path.resolve(__dirname, "../model/users.json"));
const coursesData = JSON.parse(courses.read());
const groupsData = JSON.parse(groups.read());
const usersData = JSON.parse(users.read());

const GETaddstudentsController = (req, res) => {
  res.render("addstudent", {
    courses: coursesData,
    groups: groupsData,
  });

  console.log(coursesData);
};

const POSTaddstudentsController = (req, res) => {
  const {
    cookies: { token },
  } = req;

  if (token) {
    const UserRole = verify(token);

    if (UserRole.role == "admin") {
      const { username, usersurname, password, phone, groupID, courseID } =
        req.body;

      const newStudent = {};
      newStudent.id = usersData.length + 1;
      newStudent.user_surname = usersurname;
      newStudent.user_name = username;
      newStudent.phone = phone;
      newStudent.password = password;
      newStudent.courses_id = groupID;
      newStudent.group_id = courseID;
      newStudent.role = "student";

      usersData.push(newStudent);

      users.write(usersData);

      res.redirect("/admin");
    }
  }
};

module.exports = {
  GETaddstudentsController,
  POSTaddstudentsController,
};
