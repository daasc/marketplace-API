const { body } = require('express-validator');

exports.validation = () => {
  return [
    body("name").notEmpty().withMessage('Campo name obrigatório!'),
    body("price")
      .notEmpty().withMessage('Campo name obrigatório!')
      .isNumeric().withMessage('Campo name seu valor deve ser numérico!'),
    body("categories").notEmpty().withMessage('Campo categories obrigatório!'),
    body("urlImage").notEmpty().withMessage('Campo urlImage obrigatório!'),
    body("sku").notEmpty().withMessage('Campo sku obrigatório!'),
    body("description").notEmpty().withMessage('Campo description obrigatório!'),
  ]
}