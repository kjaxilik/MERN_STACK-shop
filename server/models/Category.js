var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var c = new Schema({
  name: { type: String },
  description: String,
  parent: { type: mongoose.Schema.ObjectId, ref: 'Category' }
});

module.exports = mongoose.model('Category', c);
