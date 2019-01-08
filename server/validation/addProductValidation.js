var isEmpty = require('./isempty');
var validator = require('validator');

function addProduct(name, description, price, count) {
  var errors = {};

  // data.login = isEmpty( data.login ) ? '' : data.login;

  if (isEmpty(name)) {
    errors.name = 'Please fill a name field';
  }
  if (isEmpty(description)) {
    errors.description = 'Please fill a description field';
  }

  //price verification
  if (!validator.isNumeric(price)) {
    errors.price = 'Price must contain onlly numbers';
  }
  //price verification
  if (!validator.isNumeric(count)) {
    errors.count = 'Count must contain onlly numbers';
  }

  var result = {
    errors, // errors : errors
    isValid: isEmpty(errors)
  };

  return result;
}

module.exports = addProduct;
