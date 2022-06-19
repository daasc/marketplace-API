const { body } = require('express-validator');

const validationRules = ({ validatePassword = false, validateUpdate = false }) => {
  if (validatePassword) {
    return [
      body("newPassword")
        .notEmpty().withMessage('Campo password obrigatório!')
        .isLength({ max: 100, min: 6 }).withMessage('Campo password tem que ter no mínimo 6 caracteres !'),
    ]
  }
  if (validateUpdate) {
    return [
      body("email")
        .notEmpty().withMessage('Campo email obrigatório!')
        .isEmail().withMessage('Campo email deve ser válido!'),
      body("phoneNumber")
        .notEmpty().withMessage('Campo categories obrigatório!'),
      body("displayName").notEmpty().withMessage('Campo displayName obrigatório!'),
    ]
  }
  return [
    body("email")
      .notEmpty().withMessage('Campo email obrigatório!')
      .isEmail().withMessage('Campo email deve ser válido!'),
    body("password")
      .notEmpty().withMessage('Campo password obrigatório!')
      .isLength({ max: 100, min: 6 }).withMessage('Campo password tem que ter no mínimo 6 caracteres !'),
    body("phoneNumber")
      .notEmpty().withMessage('Campo categories obrigatório!'),
    body("displayName").notEmpty().withMessage('Campo displayName obrigatório!'),
  ]
}





module.exports = { validationRules }
