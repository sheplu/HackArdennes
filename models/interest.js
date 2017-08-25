
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var type = require('./../enums/type');
var state = require('./../enums/state');

var Interest = new Schema({
	interestId: Number,
	title : String,
	state : state,
	coords : {
		x : Number,
		y : Number
	},
	type : type,
	pushstate: []
});

module.exports = mongoose.model('Interest', Interest);
