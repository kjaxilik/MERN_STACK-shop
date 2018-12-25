var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var c = new Schema({
    user : { type: mongoose.Schema.ObjectId, ref: 'User' },
    products : [{type: mongoose.Schema.ObjectId, ref: 'Product'}]
});

module.exports = mongoose.model('Caret', c);