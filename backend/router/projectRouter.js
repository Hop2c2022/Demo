const express = require("express");

const {
    ProjectGetController,
    ProjectPostController,
    ProjectDeleteController,
    ProjectPutController,
    ProjectGetControllerById,
    LikeProjectController
} = require("../controller/projectController");
const { LikeProject } = require("../query/projectQuery");

const ProjectRouter = express
  .Router()
  .post("/project", ProjectPostController)
  .get("/project", ProjectGetController)
  .delete("/project/:project_id", ProjectDeleteController)
  .put("/project/:project_id", ProjectPutController)
  .get("/project/:project_id", ProjectGetControllerById)
  .put("/like_project/:project_id", LikeProjectController)
module.exports = ProjectRouter;
