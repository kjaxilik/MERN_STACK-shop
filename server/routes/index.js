var express = require('express');
var router = express.Router();

router.use('/api/user', require('./user.js'));
router.use('/api/product', require('./product.js'));

module.exports = router;