const express = require("express");

const {
  ClassPostController
} = require("../controller/classController");

const ClassRouter = express
  .Router()
  .post('/class/:admin', ClassPostController)
module.exports = ClassRouter;
