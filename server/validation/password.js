var validator = require('validator');

var isEmpty = require('./isempty');

function validatePassword(password) {
  var errors = {};

  if (isEmpty(password)) {
    password = '';
  }

  if (validator.isAlpha(password)) {
    errors.password = 'Your password must contain not only letters';
  }

  if (password.length < 6) {
    errors.password = 'Password must have at least 6 characters';
  }

  if (validator.isEmpty(password)) {
    errors.password = 'Please fill a password field';
  }

  var result = {
    errors,
    isValid: isEmpty(errors)
  };

  return result;
}

module.exports = validatePassword;
