var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('projects', { page: 'Projects', menuId: 'projects' });
});

module.exports = router;
