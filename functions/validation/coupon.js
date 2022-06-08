const { body } = require('express-validator');

const validationNumeric = (value, input) => {
  if (typeof value === 'string') {
    throw new Error(`Campo ${input} seu valor deve ser numérico!`)
  }
  return true
}

const validationRules = () => {
  return [
    body("name").notEmpty().withMessage('Campo name obrigatório!'),
    body("maxValue")
      .notEmpty().withMessage('Campo maxValue obrigatório!')
      .custom((value) => validationNumeric(value, 'maxValue')),
    body("minValue")
      .notEmpty().withMessage('Campo minValue obrigatório!')
      .custom((value) => validationNumeric(value, 'minValue')),
    body("expired")
      .notEmpty().withMessage('Campo expired obrigatório!')
      .custom((value) => validationNumeric(value, 'expired')),
    body("amount")
      .notEmpty().withMessage('Campo amount obrigatório!')
      .custom((value) => validationNumeric(value, 'amount')),
  ]
}



module.exports = { validationRules }