const Project = require("../database/model/project");
const bcrypt = require("bcrypt");

const {
  CreateProject,
  ProjectDelete,
  ProjectUpdate,
  GetProjectById,
  LikeProject
} = require("../query/projectQuery");


exports.ProjectGetController = async (req, res) => {
  const result = await Project.find();
  res.status(201).send({ data: result });
};

exports.ProjectGetControllerById = async (req, res) => {
  try {
    const result = await GetProjectById(req);
    res.status(201).send(result);
  } catch (err) {
    res.status(201).send(err.message);
  }
};

exports.ProjectPostController = async (req, res) => {
  try {
    await CreateProject(req);
    res.status(201).send(" Successfully created new Project");
  } catch (err) {
    res.send(err.message);
  }
};

exports.ProjectDeleteController = async (req, res) => {
  try {
    await ProjectDelete(req);
    res.status(201).send(" Successfully deleted Project");
  } catch (err) {
    res.send(err.message);
  }
};

exports.ProjectPutController = async (req, res) => {
  try {
    await ProjectUpdate(req);
    res.status(201).send(" Successfully updated Project");
  } catch (err) {
    res.send(err.message);
  }
};


exports.LikeProjectController = async (req, res) => {
  try {
    await LikeProject(req);
    res.status(201).send(" Successfully liked Project");
  } catch (err) {
    res.send(err.message);
  }
};
