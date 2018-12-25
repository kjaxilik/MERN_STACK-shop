var express = require('express');
var router = express.Router();

var Category = require('../models/Category');

router.get('/create/:name', (req, res)=>{
    new Category({
        name: req.params.name,
        description: ""
    }).save((err, category)=>{

    });
});

module.exports = router;