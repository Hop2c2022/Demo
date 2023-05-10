const User = require("../database/model/users");
const { TokenGenerator } = require("../helper/helper");
const bcrypt = require("bcrypt");

const {
  GetUserById,
  CreateUser,
  UserDelete,
  UserUpdate,
  GetUserByEmail,
  LIkeProject,
  DisLIkeProject
} = require("../query/userQuery");

exports.userGetControllerById = async (req, res) => {
  try {
    const result = await GetUserById(req);
    res.status(201).send(result);
  } catch (err) {
    res.status(201).send(err.message);
  }
};

exports.userGetControllerByEmail = async (req, res) => {
  try {
    const result = await GetUserByEmail(req);
    res.status(201).send(result);
  } catch (err) {
    res.send(err.message);
  }
};

exports.userGetController = async (req, res) => {
  const result = await User.find().sort({_id: -1});
  res.status(201).send({ data: result });
};

exports.userPostController = async (req, res) => {
  try {
    await CreateUser(req);
    res.status(201).send(" Successfully created new user ");
  } catch (err) {
    res.send(err.message);
  }
};

exports.userDeleteController = async (req, res) => {
  try {
    await UserDelete(req);
    res.status(201).send(" Successfully deleted  user");
  } catch (err) {
    res.send(err.message);
  }
};

exports.userPutController = async (req, res) => {
  try {
    await UserUpdate(req);
    res.status(201).send("User is successfully updated ");
  } catch (err) {
    res.send(err.message);
  }
};

exports.LikeProjects = async (req, res) => {
  try {
    await LIkeProject(req);
    res.status(201).send("Successfully liked a project ");
  } catch (err) {
    res.send(err.message);
  }
};

exports.DisLikeProjects = async (req, res) => {
  try {
    await DisLIkeProject(req);
    res.status(201).send("Successfully disliked a project ");
  } catch (err) {
    res.send(err.message);
  }
};

exports.userLogin = async (req, res) => {
  const { password, email } = req.body;

  const user = await User.findOne({ email: email });

  if (!user) {
    res.send(" You don't have any user account, please sign up ");
  }

  const cmp = await bcrypt.compare(password, user.password);
  if (cmp) {
    res.send(user)
  } else {
    res.send( "Invalid password");
  }
};

// exports.userLogin = async (req, res) => {
//   const { password, email } = req.body;
//   const user = await User.findOne({ email: email });
//   const cmp = await bcrypt.compare(password, user.password);
//   if (!user) {
//     res.send(" You don't have any user account, please sign up ");
//   }
//   if (cmp) {
//     const token = await TokenGenerator({ uid: user._id, expires: 1200 });
//     res.send(token)
//   } else {
//     console.log("Invalid password or email");
//     res.send( "Invalid password or email");
//   }
// };