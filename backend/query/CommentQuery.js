const Project = require("../database/model/project");
const mongoose = require("mongoose");

exports.AddCommment = async (req, res) => {
  const { project_id } = req.params;
  const { comment } = req.body;
  const createdAt = new Date(Date.now());
  const objId = new mongoose.Types.ObjectId(project_id);
  const result = await Project.findById({ _id: objId });
  const commentId = result.comments.length + 1;

  const Comment = {
    comment_id: commentId,
    comment: comment,
    created_at: createdAt
  }
  
  const resulto = await Project.findOneAndUpdate(
    { _id: project_id },
    { $push: { comments: Comment } },
    { new: true }
  );
  console.log(resulto);
  return resulto;
};

exports.CommentDelete = async (req, res) => {
  const { project_id } = req.params;
  const { comment_id } = req.params;
  const result = await Project.findByIdAndUpdate(
    { _id: project_id },
    {
      $pull: { comments: { comment_id: Number(comment_id) } },
    },
    { new: true }
  );
  return result;
};

exports.CommentUpdate = async (req, res) => {
  const { project_id } = req.params;
  const { comment_id } = req.params;
  const { comment } = req.body;
  const myProject = await Project.findById({ _id: project_id });
  let too = 0;
  myProject.comments.map((commento) => {
    console.log(commento);
    if (commento.comment_id == comment_id) {
      myProject.comments[too].comment = comment;
    } else {
      too = too + 1;
    }
  });

  const result = await Project.findByIdAndUpdate(
    { _id: project_id },
    { comment: myProject.comments },
    { new: true }
  );

  return result;
};
