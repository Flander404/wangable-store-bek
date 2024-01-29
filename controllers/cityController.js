const { City } = require("../models/models");

class CityController {
  async create(req, res) {
    const { name } = req.body;
    const type = await City.create({ name });
    return res.json(type);
  }
  async getAll(req, res) {
    const citys = await City.findAll();
    return res.json(citys);
  }
}

module.exports = new CityController();
