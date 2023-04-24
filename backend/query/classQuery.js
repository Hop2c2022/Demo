const Class = require("../database/model/class");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const request = require("supertest");

exports.CreateClass = async (req) => {
  const { classname, password } = req.body;
  const { admin } = req.params
  const members = [];
  const projects = [];
  const result = await new Class({
   classname: classname,
   password : password,
   members: members,
   projects: projects,
   admin: admin
  }).save();
  console.log(result);
  return result;
};

// exports.ProjectDelete = async (req) => {
//   const { project_id } = req.params;
//   const objId = new mongoose.Types.ObjectId(project_id);
//   const result = await Project.findById({ _id: objId });
//   const resulto = await Project.findByIdAndRemove(result);
//   return resulto;
// };

// exports.GetProjectById = async (req) => {
//   const { project_id } = req.params;
//   const objId = new mongoose.Types.ObjectId(project_id);
//   const result = await Project.findById({ _id: objId });
//   return result;
// };

// exports.ProjectUpdate = async (req) => {
//   const { project_id } = req.params;
//   const comments = [];
//   const objId = new mongoose.Types.ObjectId(project_id);
//   const result = await Project.findById({ _id: objId });
//   const { url, title, word } = req.body;
//   const resulto = await Project.findByIdAndUpdate(result, {
//     url: url,
//     title: title,
//     word: word,
//     comments : comments
//   });
//   return resulto;
// };
