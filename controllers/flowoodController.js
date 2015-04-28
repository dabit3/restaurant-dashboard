var mongoose = require('mongoose');
require('../models/flowoodmenu');
var FlowoodEntrees = mongoose.model('FlowoodEntrees');
var FlowoodAppetizers = mongoose.model('FlowoodAppetizers')

exports.createEntree = function(req, res) {
	var entree = new FlowoodEntrees(req.body);

	entree.save(function(err) {
		if (err) { return res.json(500, err)
		} 
		res.json(entree);
	})
}


exports.createAppetizer = function(req, res) {
	var appetizer = new FlowoodAppetizers(req.body);

	appetizer.save(function(err) {
		if (err) { return res.json(500, err)
		} 
		res.json(appetizer);
	})
}
