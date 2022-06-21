const { Router } = require("express");
const ServiceCoupon = require("../services/coupon");
const serviceCoupon = new ServiceCoupon();
const { validate } = require("../middleware/validation.js");
const { validationRules } = require("../validation/coupon");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const coupons = await serviceCoupon.get();
    res.status(200).json(coupons);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { params: { id } } = req;
    const coupon = await serviceCoupon.getId(id);
    res.status(200).json(coupon);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/", validationRules(), validate, async (req, res) => {
  try {
    const { body: coupon } = req;
    await serviceCoupon.store(coupon);
    res.status(200).send("created with success!");
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/:id", validationRules(), validate, async (req, res) => {
  try {
    const { params: { id }, body: coupon } = req;
    await serviceCoupon.update(id, coupon);
    res.status(200).send("coupon updated with success!");
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { params: { id } } = req;
    await serviceCoupon.remove(id);
    res.status(200).send("coupon deleted with success!");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;