require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require('./models/models')


const PORT = process.env.PORT || 5000;

const app = express()

const start = async () => {
    await sequelize.authenticate();
    await sequelize.sync();
    try {
        app.listen(PORT, () => console.log(`Сервер запушен на ${PORT} порту`))
    }catch(e) {
        console.log(e)
    }
}

start()