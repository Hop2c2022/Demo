const Card = require("../database/model/cards");
const bcrypt = require("bcrypt");

const {
  CreateCard,
  CardDelete,
  CardUpdate,
  GetCardById
} = require("../query/cardQuery");


exports.cardGetController = async (req, res) => {
  const result = await Card.find();
  res.status(201).send({ data: result });
};

exports.cardGetControllerById = async (req, res) => {
  try {
    const result = await GetCardById(req);
    res.status(201).send(result);
  } catch (err) {
    res.status(201).send(err.message);
  }
};

exports.cardPostController = async (req, res) => {
  try {
    await CreateCard(req);
    res.status(201).send(" Successfully created new card");
  } catch (err) {
    res.send(err.message);
  }
};

exports.cardDeleteController = async (req, res) => {
  try {
    await CardDelete(req);
    res.status(201).send(" Successfully deleted card");
  } catch (err) {
    res.send(err.message);
  }
};

exports.cardPutController = async (req, res) => {
  try {
    await CardUpdate(req);
    res.status(201).send(" Successfully updated card");
  } catch (err) {
    res.send(err.message);
  }
};
