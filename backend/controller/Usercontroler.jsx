const User = require('../database/model/User');
const bcrypt = require('bcrypt');

const { GetUserById, CreateUser, UserDelete, UserUpdate, GetUserByEmail } = require('');

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
    const result = await User.find();
    res.status(201).send({ data: result });
};

exports.userPostController = async (req, res) => {
    try {
        await CreateUser(req);
        res.status(201).send(' Successfully created new user ');
    } catch (err) {
        res.send(err.message);
    }
};

exports.userDeleteController = async (req, res) => {
    try {
        await UserDelete(req);
        res.status(201).send(' Successfully deleted  user ');
    } catch (err) {
        res.send(err.message);
    }
};

exports.userPutController = async (req, res) => {
    try {
        await UserUpdate(req);
        res.status(201).send(' User is successfully updated ');
    } catch (err) {
        res.send(err.message);
    }
};
