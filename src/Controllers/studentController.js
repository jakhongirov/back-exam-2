const { verify } = require("../lib/jwt");
const fs = require("../lib/fs");
const path = require("path");

const Allgroups = new fs(path.resolve(__dirname, "../model/groups.json"));
const users = new fs(path.resolve(__dirname, "../model/users.json"));
const hw = new fs(path.resolve(__dirname, "../model/hw.json"));
const groupsData = JSON.parse(Allgroups.read());
const hwData = JSON.parse(hw.read());
const usersData = JSON.parse(users.read()).filter((e) => e.role == "student");

const studentController = (req, res) => {
  const {
    cookies: { token },
  } = req;

  if (token) {
    const UserRole = verify(token);

    if (UserRole.role == "student") {
      const foundUser = usersData.find((e) => e.id == UserRole.id);
      const foundGr = groupsData.find((e) => foundUser.group_id == e.id);
      const foundHw = hwData.filter((e) => e.group_id == foundGr.id);

      console.log(foundUser, foundHw, foundGr);
      res.render("student", { user: [foundUser], hw: foundHw, gr: [foundGr] });
    }
  }
};

module.exports = studentController;
