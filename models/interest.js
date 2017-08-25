
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Interest = new Schema({
	interestId: Number,
	title : String,
	state : {
		type : String,
		enum : [ 'GREEN', 'ORANGE', 'RED'],
		default : 'GREEN'
	},
	coords : {
		x : Number,
		y : Number
	},
	type : {
		type : String,
		enum : [ 'BOISSON', 'NOURRITURE'],
		default : 'BOISSON'
	},
	pushstate: []
});

module.exports = mongoose.model('Interest', Interest);
