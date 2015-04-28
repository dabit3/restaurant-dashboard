var mongoose = require('mongoose');

var locationsSchema = new mongoose.Schema({
	city: String,
	address: String,
	zip: String,
	state: String, 
	phone: String
});

mongoose.model('Locations', locationsSchema);