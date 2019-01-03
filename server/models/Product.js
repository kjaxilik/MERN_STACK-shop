var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var p = new Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  category: { type: mongoose.Schema.ObjectId, ref: 'Category' },
  seller: { type: mongoose.Schema.ObjectId, ref: 'User' },
  count: { type: Number },
  sold: { type: Number },
  rating: { type: Number, default: 0.0 },
  mainImg: { type: mongoose.Schema.ObjectId, ref: 'Image' },

  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', p);
