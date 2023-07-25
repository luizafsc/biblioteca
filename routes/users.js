var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function (req, res, next) {
  res.render('index', { title: 'you are so cool' });
});

router.get('/ifc', function (req, res, next) {
  res.render('index', { title: 'bem-vindo ao ifc' });
});

router.get('/cool/beach', function (req, res, next) {
  res.render('index', { title: 'adoro praia' });
});

module.exports = router;
