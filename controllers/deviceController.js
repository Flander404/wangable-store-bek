const uuid = require("uuid");
const path = require("path");
const { Device } = require("../models/models");
const ApiError = require("../error/ApiError");

class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, cityId } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const device = await Device.create({
        name,
        price,
        cityId,
        img: fileName,
      });
      return res.json(device);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    let devices = await Device.findAll();
    return res.json(devices);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
    });
    return res.json(device);
  }
  async delete(req, res, next) {
    const { id } = req.params;
    try {
      await Device.destroy({ where: { id } });
      return res.json({message: "Тип успешно удален"})
    } catch (error) {
      console.log(error);
      next(ApiError.internal(e.message))
    }
  }
  async update(req, res){
    const { id } = req.params;
    
  }
}

module.exports = new DeviceController();
