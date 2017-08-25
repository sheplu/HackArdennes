var express = require('express');
var router = express.Router();
var Interest = require('../models/interest');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.twig', {
    message: "hello world"
  });
});

module.exports = router;
