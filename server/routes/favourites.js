var express = require('express');
var router = express.Router();

var Favourites = require('../models/Favourites');

router.post('/add', (req, res) => {
  Favourites.findOne({ product: req.body.product, user: req.body.user })
    .then(oldFav => {
      if (oldFav) {
        res.status(400).send({ message: 'Already in favourites' });
      } else {
        let fav = new Favourites({
          product: req.body.product,
          user: req.body.user
        });
        fav
          .save()
          .then(favourites => {
            res.status(200).end();
          })
          .catch(err => {
            res.status(500).send({ message: err.message });
          });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
});

router.delete('/del', (req, res) => {
  Favourites.deleteOne({ product: req.body.product, user: req.body.user })
    .then(() => {
      res.status(200).end();
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
});

router.get('/all/:user/:page', (req, res) => {
  let populateQuery = [
    {
      path: 'product',
      populate: {
        path: 'seller'
      }
    }
  ];

  Favourites.find({ user: req.params.user })
    .skip((req.params.page - 1) * 6)
    .limit(6)
    .populate(populateQuery)
    .then(favourites => {
      Favourites.count({ user: req.params.user }).then(count => {
        res
          .status(200)
          .send({ favourites, count })
          .catch();
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
});

module.exports = router;
