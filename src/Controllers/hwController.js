const { verify } = require("../lib/jwt");
const fs = require("../lib/fs");
const path = require("path");

const hw = new fs(path.resolve(__dirname, "../model/hw.json"));
const hwData = JSON.parse(hw.read());

const hwController = (req, res) => {
  const {
    cookies: { token },
  } = req;

  if (token) {
    const UserRole = verify(token);

    if (UserRole.role == "teacher") {
      const { homework, grID } = req.body;
      const newHw = {};

      newHw.id = hwData.length + 1;
      newHw.msg = homework;
      newHw.group_id = grID;

      hwData.push(newHw);

      hw.write(hwData);

      res.redirect("/teacher");
    }
  }
};

module.exports = hwController;
