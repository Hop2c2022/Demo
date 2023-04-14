const express = require("express");

const {
    cardGetController,
    cardPostController,
    cardDeleteController,
    cardPutController,
    cardGetControllerById
} = require("../controller/cardController");

const CardRouter = express
  .Router()
  .post("/card", cardPostController)
  .get("/card", cardGetController)
  .delete("/card/:card_id", cardDeleteController)
  .put("/card/:card_id", cardPutController)
  .get("/card/:card_id", cardGetControllerById)
module.exports = CardRouter;
