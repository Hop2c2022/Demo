const express = require("express");
const UserRouter = require("./router/userRouter");
const postRouter = require("./router/postRouter");
const commentRouter = require("./router/commentRouter");
const CardRouter = require("./router/cardRouter")
const { connectDb } = require("./database/db");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(UserRouter);
app.use(commentRouter);
app.use(postRouter);
app.use(CardRouter);

const startServer = async () => {
  await connectDb();
  app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
  });
};

startServer();

module.exports = app;
