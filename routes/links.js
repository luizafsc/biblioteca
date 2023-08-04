var express = require('express');
var router = express.Router();

/* GET links listing. */
router.get('/oi', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/teste', function (req, res, next) {
  res.render('index', { title: 'isso é um teste' });
});

module.exports = router;
