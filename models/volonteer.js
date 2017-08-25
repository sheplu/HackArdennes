
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Volonteer = new Schema({
	volonteerId: Number,
	personnalInformations : String
});

module.exports = mongoose.model('Volonteer', Volonteer);
