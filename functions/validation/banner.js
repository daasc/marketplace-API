const { body } = require('express-validator');

const validationRules = () => {
  return [
    body("urlImage").notEmpty().withMessage('Campo urlImage obrigatório!'),
    body("link").notEmpty().withMessage('Campo Link obrigatório!'),
  ]
}

module.exports = { validationRules }
