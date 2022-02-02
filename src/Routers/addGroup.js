const express = require("express");
const app = express();

//Controller
const {
  GETaddGroupController,
  POSTaddGroupController,
} = require("../Controllers/addGroupController");
//GET methods
app.get("/addGroup", GETaddGroupController);
app.post("/newGroup", POSTaddGroupController);

module.exports = app;
