var express = require('express');
var router = express.Router();
var Product = require('../models/Product');

router.post('/add', (req, res) => {
  var newProduct = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    //category: req.body.category,
    //seller: req.body.seller,
    count: req.body.count,
    sold: req.body.sold,
    rating: req.body.rating
    //mainImg: req.body.mainImg
  });

  newProduct
    .save()
    .then(product => {
      console.log('Product Added' + product);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send();
    });
});

module.exports = router;
