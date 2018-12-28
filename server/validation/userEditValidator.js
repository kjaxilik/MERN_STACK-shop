var isEmpty = require('./isempty');
var validator = require('validator');

function validateUserEdit(name, email) {
  var errors = {};

  // data.login = isEmpty( data.login ) ? '' : data.login;

  if (isEmpty(name)) {
    errors.name = 'Please fill a name field';
  }

  //email verification
  if (!validator.isEmail(email)) {
    errors.email = 'Please provide a valid email';
  }

  var result = {
    errors, // errors : errors
    isValid: isEmpty(errors)
  };

  return result;
}

module.exports = validateUserEdit;
