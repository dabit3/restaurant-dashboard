var mongoose = require('mongoose');
require('../models/locations');
var Locations = mongoose.model('Locations');

exports.createLocation = function(req, res) {
	var location = new Locations(req.body);

	location.save(function(err) {
		if (err) { return res.json(500, err)
		} 
		res.json(location);
	})
}

exports.query = function(req, res) {
  Locations.find().exec(function(err, location) {
    if (err) return res.json(500, err);
    res.json(location);
  });
};