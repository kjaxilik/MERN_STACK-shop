var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// delivery type : 0 - delivery, 1 - self

var o = new Schema({
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    products: [{type: mongoose.Schema.ObjectId, ref: 'Product'}],
    date: { type: Date, default: Date.now },
    address: { type: String },
    paymentType: { type: String },
    deliveryType: { type: Number }
});

module.exports = mongoose.model('Order', o);