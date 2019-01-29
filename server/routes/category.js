var express = require('express');
var router = express.Router();

var Category = require('../models/Category');

router.post('/add', (req, res) => {
  let category = new Category({
    name: req.body.name,
    description: req.body.description
  });

  if (req.body.parent) {
    category.parent = req.body.parent;
  }

  category
    .save()
    .then(newCategory => {
      res.status(200).send(newCategory);
    })
    .catch();
});

router.get('/all', (req, res) => {
  Category.find({})
    .populate('parent')
    .then(categories => {
      res.status(200).send(categories);
    })
    .catch();
});

router.get('/id/:id', (req, res) => {
  Category.findById(req.params.id)
    .populate('parent')
    .then(cat => {
      res.status(200).send(cat);
    })
    .catch();
});

module.exports = router;
