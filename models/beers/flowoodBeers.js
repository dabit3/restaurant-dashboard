var mongoose = require('mongoose');

var flowoodBeerSchema = new mongoose.Schema({
	labelUrl: String,
	name: String,
	location: String,
	type: String
});

mongoose.model('FlowoodBeers', flowoodBeerSchema)