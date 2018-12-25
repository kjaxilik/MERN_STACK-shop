var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');

var app = express();

mongoose.connect('mongodb://localhost:27017/store', {useNewUrlParser: true, useCreateIndex : true})
		.then(() =>{
			console.log("DB connected");
		})
		.catch( err => {
			console.log(err);
		});


app.use( morgan('dev') );
app.use( bodyParser.urlencoded({ limit: '100mb', extended: true }) );
app.use( bodyParser.json({ limit: '100mb' }) );
app.use( cookieParser() );

app.use( passport.initialize() );
app.use( passport.session() );
require( './server/config/passport' )(passport);

app.use(function(req, res, next){
    if(req.user){
        res.cookie('user', JSON.stringify(req.user));
    }
    next();
});

app.use( require('./server/routes') );

app.listen(3010, function(){
	console.log('Server listening on port 3010');
});