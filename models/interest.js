
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Interest = new Schema({
	interestId: Number,
	title : String,
	state : String,
	coords : {
		x : Number,
		y : Number
	},
	type : String
});

module.exports = mongoose.model('Interest', Interest);
