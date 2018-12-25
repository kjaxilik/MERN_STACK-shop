var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var c = new Schema({
    user : { type: mongoose.Schema.ObjectId, ref: 'User' },
    product : { type: mongoose.Schema.ObjectId, ref: 'Product' },
    text : { type: String },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', c);