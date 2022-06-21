const express = require("express");
const productRouter = require("./product");
const categoryRouter = require("./category");
const couponRouter = require("./coupon");
const userRouter = require("./user");
const router = express.Router();

router.use("/product", productRouter);
router.use("/category", categoryRouter);
router.use("/coupon", couponRouter);
router.use("/user", userRouter);

module.exports = router;