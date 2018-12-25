var isEmpty = require('./isEmpty');

function validateLoginData( data ) {
    
    var errors = {};

    data.login = !isEmpty(data.login) ? data.login : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if( data.login == '' ){
        errors.login = 'Please, fill login field';
    }

    if( data.password == '' ){
        errors.password = 'Please, fill password field';
    }

    return {
        errors,
        isValid : isEmpty(errors)
    }

}

module.exports = validateLoginData;