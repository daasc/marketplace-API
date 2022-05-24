const { body } = require('express-validator');

const validationRules = () => {
  return [
    body("name").notEmpty().withMessage('Campo name obrigatório!'),
    body("urlImage").notEmpty().withMessage('Campo urlImage obrigatório!'),
    body("description").notEmpty().withMessage('Campo description obrigatório!'),
  ]
}

module.exports = { validationRules }
