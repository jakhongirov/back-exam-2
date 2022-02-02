const { verify } = require("../lib/jwt");
const fs = require("../lib/fs");
const path = require("path");

const courses = new fs(path.resolve(__dirname, "../model/courses.json"));
const users = new fs(path.resolve(__dirname, "../model/users.json"));
const coursesData = JSON.parse(courses.read());
const usersData = JSON.parse(users.read());


const GETaddTeachersController = (req, res) => {
    res.render("addteacher", { courses: coursesData });
};

const POSTaddTeachersController = (req, res) => {
  const {
    cookies: { token },
  } = req;

  if (token) {
    const UserRole = verify(token);

    if (UserRole.role == "admin") {
      const { teacherName, teacherSurname, courseID, phone, password } =
        req.body;

      const newTeacher = {};

      newTeacher.id = usersData.length + 1;
      newTeacher.user_surname = teacherSurname;
      newTeacher.user_name = teacherName;
      newTeacher.phone = phone;
      newTeacher.courses_id = courseID;
      newTeacher.password = password;
      newTeacher.role = 'teacher';

      usersData.push(newTeacher);

      users.write(usersData);

      res.redirect("/admin");
    }
  }
};

module.exports = {
  GETaddTeachersController,
  POSTaddTeachersController,
};
