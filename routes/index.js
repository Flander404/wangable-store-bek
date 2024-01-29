const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const deviceRouter = require("./deviceRouter");
const cityRouter = require("./cityRouter");

router.use("/user", userRouter);
router.use("/device", deviceRouter);
router.use("/city", cityRouter);

module.exports = router;
