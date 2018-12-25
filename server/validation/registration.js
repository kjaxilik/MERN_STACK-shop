var isEmpty = require('./isempty');

function validateRegistrationData( data ){

	var errors = {};

	// data.login = isEmpty( data.login ) ? '' : data.login;
	
	if( isEmpty(data.login) ){
		data.login = '';
	}

	if( isEmpty(data.password) ){
		data.password = '';
	}

	if( isEmpty(data.password2) ){
		data.password2 = '';
	}

	if( data.login.length < 6 || data.login.length > 30 ){
		errors.login = 'Login must be between 6 and 30 characters';
	}

	if( data.login.length == 0 ){
		errors.login = 'Please, fill login field';
	}

	if( data.password.length == 0 ){
		errors.password = 'Please, fill password field';
	}

	if( data.password.length < 6 ){
		errors.password = 'Password must be more than 6 characters';
	}

	if( data.password2.length == 0 ){
		errors.password2 = 'Please, fill confirm password field';
	}

	if( data.password != data.password2 ){
		errors.password2 = 'Passwords do not match';
	}

	var result = {
		errors,						// errors : errors
		isValid: isEmpty(errors)
	};

	return result;

}

module.exports = validateRegistrationData;