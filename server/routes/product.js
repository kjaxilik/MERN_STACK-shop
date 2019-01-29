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
  }

  if (!req.user) {
    return res.status(401).send({ message: 'No authorized user' });
  } else {
    let newProduct = new Product({
      name: req.body.name,
      description: req.body.description,
      count: req.body.count,
      price: req.body.price,
      seller: req.user._id
    });

    newProduct
      .save()
      .then(product => {
        res.status(200).send(product);
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  }
});

/** GET ALL PRODUCTS OF USER */
router.get('/user/:id', (req, res) => {
  Product.find({ seller: req.params.id })
    .populate('seller')
    .then(products => {
      res.status(200).send(products);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
});

/** GET SINGLE PRODUCT */
router.get('/:id', (req, res) => {
  Product.findById(req.params.id)
    .populate('seller')
    .then(product => {
      if (product) {
        return res.status(200).send(product);
      }

      return res.status(404).end();
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/** GET ALL PRODUCTS */
// router.get('/', (req, res) => {
//   Product.find()
//     .populate('seller')
//     .then(products => {
//       if (products) {
//         res.status(200).send(products);
//       }
//     })
//     .catch(err => {
//       res.status(500).send({ message: err.message });
//     });
// });

// PAGINATION OF PRODUCTS
router.get('/all/:page', (req, res) => {
  Product.find()
    .sort({ data: -1 })
    .skip((req.params.page - 1) * 6)
    .limit(6)
    .populate('seller')
    .then(products => {
      Product.count({})
        .then(count => {
          res.status(200).send({
            products,
            count
          });
        })
        .catch();
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
});

module.exports = router;
