const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

const validationNumeric = (value, input) => {
  if (typeof value === "string") {
    throw new Error(`Campo ${input} seu valor deve ser numérico!`);
  }
  return true;
};

module.exports = { validate, validationNumeric };