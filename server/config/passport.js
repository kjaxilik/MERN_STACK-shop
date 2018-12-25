var LocalStrategy = require('passport-local');

var User = require('../models/User');


module.exports = passport => {
	
    passport.use(new LocalStrategy({usernameField: 'login'},
        function(login, password, done){
            User.findOne({login: login}).exec(function(err, user){
                if(err){
                    return done(err);
                }

                if(!user) {
                    return done(null, false);
                }

                user.comparePassword(password, function(err, isMatch){
                    if(err){
                        return done(err);
                    }

                    if(isMatch) {
                        return done(null, user);
                    }

                    return done(null, false);
                });
            });
        }
    ));

    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
};