var express = require('express');
var router = express.Router();
var Interest = require('../models/interest');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index.twig', {
    message: "hello world"
  });
});


router.get('/interest', function(req, res, next) {
	Interest.find({}, function(err, data){
		if(err) {
			res.json(err);
		} else {
			res.json(data);
		}

	})
});

router.post('/interest', function(req, res, next) {
	var interest = new Interest({
		title : req.body.title,
		state : req.body.state,
		coords : {
			x : req.body.x,
			y : req.body.y
		},
		type : req.body.type
	});
	interest.save(function(err, data) {
		if (err) {
			res.json(err);
		} else {
			res.json(data);
		}
	});
});

router.put('/interest', function(req, res, next) {
	console.log(req.body.state);
	Interest.findOneAndUpdate({
		title: req.body.title
	}, {
		state : req.body.state
	}, {
		new : true
	}, function (err, data) {
		if(err) {
			res.json(err);
		} else {
			res.json(data);
		}
	})
});
module.exports = router;
