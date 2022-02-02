 const express = require("express");
const app = express();

//Controller
const groupsController = require("../Controllers/groupsController");

//GET methods
app.get("/groups", groupsController);

module.exports = app;
