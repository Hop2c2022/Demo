const mongoose = require("mongoose");

const Card = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    minlength: [5, "title length must be at least 6 characters"],
    maxlength: [20, "title length must be 6 to 20 characters"],
  },
  word: {
    type: String,
    required: true,
    maxlength: [150, "paragraph length must be 6 to 150 characters"],
  },
  createdAt: { type: Date, default: Date.now() },
});

const CardModel = mongoose.model("Card", Card);

module.exports = CardModel;
