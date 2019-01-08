var express = require('express');
var router = express.Router();
var Product = require('../models/Product');
var validateAddProduct = require('../validation/addProductValidation');

router.post('/add', (req, res) => {
  var validation = validateAddProduct(
    req.body.name,
    req.body.description,
    req.body.price,
    req.body.count
  );

  if (!validation.isValid) {
    return res.status(400).send(validation.errors);
  } else {
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
        //console.log('Product Added' + product);
        res.status(200).send(product);
      })
      .catch(err => {
        console.log(err);
        res.status(400).send();
      });
  }
});

/** GET ALL PRODUCTS */
router.get('/', (req, res) => {
  Product.find()
    .then(products => {
      if (products) {
        res.status(200).send(products);
      }
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

module.exports = router;
