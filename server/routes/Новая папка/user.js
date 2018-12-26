var express = require('express');
var router = express.Router();
var passport = require('passport');

var validateRegister = require('../validation/registration');
var validateLogin = require('../validation/login');
var validatePassword = require('../validation/password');

var User = require('../models/User');

router.post('/register', (req, res) => {

    var validation = validateRegister(req.body);

    if( !validation.isValid ){
        return res.status(400).send(validation.errors);
    }

    User.findOne({login: req.body.login})
        .then(user => {
            if( user ){
                validation.errors.login = 'This login already exists';
                return res.status(400).send(validation.errors);
            }else{

                var newUser = new User({
                    login: req.body.login,
                    password: req.body.password
                });

                newUser.save()
                    .then(user => {
                        req.login(user, function(){
                            res.cookie('user', JSON.stringify(user._id));
                            res.status(200).send(user);
                        });
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(400).send();
                    });

            }
        })
        .catch(err => {
            console.log(err);
            res.status(400).send();
        });

});

router.post('/login', function(req, res, next) {
    
    var validation = validateLogin(req.body);

    if( !validation.isValid ){
        return res.status(401).send(validation);
    }

    passport.authenticate('local', function(err, user, info){

        if( err ){
            validation.errors.passport = err.message;
            return res.status(500).send(validation);
        }

        if( !user ){
            validation.errors.passport = 'Wrong login or password';
            return res.status(401).send(validation);
        }

        req.logIn(user, function(){
            res.cookie('user', JSON.stringify(user._id));
            return res.status(200).send(user);
        });

    })(req, res, next);

});

router.post('/logout', (req, res) => {
    req.logout();
    res.clearCookie('user');
    res.status(200).end();
});

router.get('/:id', (req, res)=>{

    User.findById( req.params.id )
        .then( user => {
            if( user ){
                return res.status(200).send(user);
            }

            return res.status(404).end();
        })
        .catch( err => {
            res.status(500).send(err);
        });

});

router.put('/edit', (req, res) => {
    // User.findById( req.user._id )
    User.findById( req.body._id )
        .then( user => {

            user.name = req.body.name;
            user.email = req.body.email;
            user.address = req.body.address;
            user.phone = req.body.phone;
            user.birthDate = req.body.birthDate;
            user.rating = req.body.rating;
            user.photo = req.body.photo;

            user.save()
                .then( newUser => {
                    res.status(200).send( newUser );
                })
                .catch( err => {
                    res.status(500).send( err );
                });

        })
        .catch( err => {
            res.status(500).send(err);
        });
});

router.put('/editpass', (req, res) => {

    var validation = validatePassword(req.body.password);

    if( !validation.isValid ){
        return res.status(400).send( validation.errors );
    }

    // User.findById( req.user._id )
    User.findById( req.body._id )
        .then( user => {

            user.password = req.body.password;
            user.save()
                .then( newUser => {
                    res.status(200).send(newUser);
                })
                .catch( err => {
                    res.status(500).send(err);
                });

        })
        .catch( err => {
            res.status(500).send(err);
        });

});

module.exports = router;