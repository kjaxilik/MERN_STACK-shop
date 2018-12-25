var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var i = new Schema({
    product : { type: mongoose.Schema.ObjectId, ref: 'Product' },
    minified : { type: String },
    original : { type: String },
    zoom : { type: String }
});

module.exports = mongoose.model('Image', i);