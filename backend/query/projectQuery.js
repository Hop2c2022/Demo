const Project = require("../database/model/project");
const Class = require("../database/model/class");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const request = require("supertest");

exports.CreateProject = async (req) => {
  const { url, title, word } = req.body;
  const class_id = req.params;
  const objId = new mongoose.Types.ObjectId(class_id);
  const result = await Class.findById({ _id: objId });
  const random = Math.random()
  const salt = bcrypt.genSaltSync(1);
  const id = bcrypt.hashSync(random, salt);
  const comments = [];
  const likes = 0;

  const project = {
    project_id: id,
    url: url,
    title: title,
    word: word,
    comments: comments,
    likes: likes
  }

  const resulto = await Class.findOneAndUpdate(
    { _id: result},
    { $push: { projects: project } },
    { new: true }
  );

  console.log(resulto);
  return resulto;
};

exports.ProjectDelete = async (req) => {
  const { project_id } = req.params;
  const objId = new mongoose.Types.ObjectId(project_id);
  const result = await Project.findById({ _id: objId });
  const resulto = await Project.findByIdAndRemove(result);
  return resulto;
};

exports.LikeProject = async (req) => {
  const { project_id } = req.params;
  const project = await Project.findById(project_id);

  if(!project) {
    return {
      error: 'iim project baihgui'
    }
  }
  const previousLike = project.likes;
  await Project.findByIdAndUpdate(project_id,{
    likes: previousLike + 1
  })
  return {
    success: true
  }
}


exports.GetProjectById = async (req) => {
  const { project_id } = req.params;
  const objId = new mongoose.Types.ObjectId(project_id);
  const result = await Project.findById({ _id: objId });
  return result;
};

exports.ProjectUpdate = async (req) => {
  const { project_id } = req.params;
  const comments = [];
  const objId = new mongoose.Types.ObjectId(project_id);
  const result = await Project.findById({ _id: objId });
  const { url, title, word } = req.body;
  const resulto = await Project.findByIdAndUpdate(result, {
    url: url,
    title: title,
    word: word,
    comments: comments
  });
  return resulto;
};
