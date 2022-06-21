const { body } = require("express-validator");
const { validationNumeric } = require("../middleware/validation.js");

const validationRules = () => {
  return [
    body("name").notEmpty().withMessage("Campo name obrigatório!"),
    body("price")
      .notEmpty().withMessage("Campo name obrigatório!")
      .custom((value) => validationNumeric(value, "maxValue")),
    body("categories").notEmpty().withMessage("Campo categories obrigatório!"),
    body("urlImage").notEmpty().withMessage("Campo urlImage obrigatório!"),
    body("sku").notEmpty().withMessage("Campo sku obrigatório!"),
    body("description").notEmpty().withMessage("Campo description obrigatório!"),
  ];
};



module.exports = { validationRules };
