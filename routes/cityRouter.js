const Router = require("express");
const cityController = require("../controllers/cityController");
const router = new Router();

router.post("/", cityController.create);
router.get("/", cityController.getAll);

module.exports = router;
    