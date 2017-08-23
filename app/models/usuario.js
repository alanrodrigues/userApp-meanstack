var mongoose = require('mongoose');

module.exports = function() {
	
	var schema = mongoose.Schema({});
	
	var schema = mongoose.Schema({
		nome: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		celular: {
			type: String
		}
	});
	
	return mongoose.model('Usuario', schema);

};