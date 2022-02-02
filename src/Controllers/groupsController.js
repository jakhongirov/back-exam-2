const fs = require("../lib/fs");
const path = require("path");

const groups = new fs(path.resolve(__dirname, "../model/groups.json"));
const groupsData = JSON.parse(groups.read());

const groupsController = (req, res) => {
  res.render("groups", { groups: groupsData });
};

module.exports = groupsController;
