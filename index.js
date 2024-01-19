require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const router = require('./routes/index')

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use('/api', router)

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порту`));
  } catch (error) {
    console.error("Ошибка при запуске сервера пожалуйста эту ошибку:", error);
  }
};

start();
