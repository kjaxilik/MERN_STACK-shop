var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var f = new Schema({
    product : { type: mongoose.Schema.ObjectId, ref: 'Product' },
    user : { type: mongoose.Schema.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Favourite', f);