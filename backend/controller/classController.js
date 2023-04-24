const Class= require("../database/model/class");

const {
  CreateClass
} = require("../query/classQuery")


exports.ProjectGetController = async (req, res) => {
  const result = await Class.find();
  res.status(201).send({ data: result });
};

// exports.ProjectGetControllerById = async (req, res) => {
//   try {
//     const result = await GetProjectById(req);
//     res.status(201).send(result);
//   } catch (err) {
//     res.status(201).send(err.message);
//   }
// };

exports.ClassPostController = async (req, res) => {
  try {
    await CreateClass(req);
    res.status(201).send(" Successfully created new Class");
  } catch (err) {
    res.send(err.message);
  }
};

// exports.ProjectDeleteController = async (req, res) => {
//   try {
//     await ProjectDelete(req);
//     res.status(201).send(" Successfully deleted Project");
//   } catch (err) {
//     res.send(err.message);
//   }
// };

// exports.ProjectPutController = async (req, res) => {
//   try {
//     await ProjectUpdate(req);
//     res.status(201).send(" Successfully updated Project");
//   } catch (err) {
//     res.send(err.message);
//   }
// };
