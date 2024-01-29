require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const router = require("./routes/index");
const fileUpload = require("express-fileupload");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use(express.static(path.resolve(__dirname, "static")));
app.use("/api", router);
app.get("/", (req, res) => res.send("index"));

const start = async () => {
  await sequelize.authenticate();
  await sequelize.sync();
  try {
    app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порту`));
  } catch (error) {
    console.error("Ошибка при запуске сервера пожалуйста эту ошибку:", error);
  }
};

start();
