const { body, validationResult } = require('express-validator');

const validationRules = () => {
  return [
    body("name").notEmpty().withMessage('Campo name obrigatório!'),
    body("price")
      .notEmpty().withMessage('Campo name obrigatório!')
      .isFloat().withMessage('Campo name seu valor deve ser numérico!'),
    body("categories").notEmpty().withMessage('Campo categories obrigatório!'),
    body("urlImage").notEmpty().withMessage('Campo urlImage obrigatório!'),
    body("sku").notEmpty().withMessage('Campo sku obrigatório!'),
    body("description").notEmpty().withMessage('Campo description obrigatório!'),
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  validationRules,
  validate,
}