var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var c = new Schema({
    name : { type: String },
    description : String
});

module.exports = mongoose.model('Category', c);