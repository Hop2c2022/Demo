const express = require("express");
const {TokenCheckerMiddleware} = require("../helper/midtoken")

const {
  userPostController,
  userGetControllerById,
  userGetController,
  userDeleteController,
  userPutController,
  userGetControllerByEmail,
  LikeProjects,
  DisLikeProjects,
  userLogin

} = require("../controller/userController");
const {TokenCheckerMiddleware} = require("../helper/midtoken")

const UserRouter = express
  .Router()
  .get("/user", TokenCheckerMiddleware ,userGetController)
  .post("/user", userPostController)
  .get("/user/:user_id", userGetControllerById)
  .delete("/user/:user_id", userDeleteController)
  .put("/user/:user_id", userPutController)
  .get("/user/:email", userGetControllerByEmail)
  .put("/likeProject/:user_id", LikeProjects)
  .put("/dislikeProject/:user_id", DisLikeProjects)
  .post("/login", userLogin)

module.exports = UserRouter;
