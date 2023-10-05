

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('services', { page: 'Services', menuId: 'services' });
});

module.exports = router;
