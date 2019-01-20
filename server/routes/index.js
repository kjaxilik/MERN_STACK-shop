var express = require('express');
var router = express.Router();

router.use('/api/user', require('./user.js'));
router.use('/api/product', require('./product.js'));
router.use('/api/favourite', require('./favourites'));

module.exports = router;