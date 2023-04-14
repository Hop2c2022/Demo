const Card = require("../database/model/cards");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const request = require("supertest");

exports.CreateCard = async (req) => {
  const { url, title, word } = req.body;
  const id = await Card.countDocuments({}).exec() + 1

  const result = await new Card({
   id: id,
   url: url,
   title: title,
   word: word
  }).save();
  console.log(result);
  return result;
};

exports.CardDelete = async (req) => {
  const { card_id } = req.params;
  const objId = new mongoose.Types.ObjectId(card_id);
  const result = await Card.findById({ _id: objId });
  const resulto = await Card.findByIdAndRemove(result);
  return resulto;
};

exports.GetCardById = async (req) => {
  const { card_id } = req.params;
  const objId = new mongoose.Types.ObjectId(card_id);
  const result = await Card.findById({ _id: objId });
  return result;
};

exports.CardUpdate = async (req) => {
  const { card_id } = req.params;
  const objId = new mongoose.Types.ObjectId(card_id);
  const result = await Card.findById({ _id: objId });
  const { url, title, word } = req.body;
  const resulto = await Card.findByIdAndUpdate(result, {
    url: url,
    title: title,
    word: word
  });
  return resulto;
};
