

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('contact', { page: 'Contact', menuId: 'contact' });
});

module.exports = router;
