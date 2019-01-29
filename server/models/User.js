var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var u = new Schema({
  login: { type: String, unique: true },
  password: { type: String },
  name: String,
  address: String,
  phone: String,
  email: String,
  birthDate: Date,
  rating: { type: Number, default: '0.0' },
  photo: String
});

// проверка если пароль изменился
u.pre('save', function(next) {
  var user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

u.methods.comparePassword = function(candidatePassword, next) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return next(err);

    next(null, isMatch);
  });
};

module.exports = mongoose.model('User', u);
