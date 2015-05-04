var mongoose = require('mongoose');
require('../../models/beers/flowoodBeers')
var FlowoodBeers = mongoose.model('FlowoodBeers')

exports.createBeer = function(req, res) {
	var beer = new FlowoodBeers(req.body);
	beer.save(function(err) {
		if (err) { return res.json(500, err)
		} 
		res.json(beer);
	})
}

exports.getBeer = function(req, res) {
	mongoose.model('FlowoodBeers').find({}, function(err, items) {
			if(err) {
			} else {
				res.json(items)
			}
		})
}

exports.deleteBeer = function(req, res) {
		mongoose.model('FlowoodBeers').findById(req.params.id, function(err, beer) { 
			if(err) {return next(err);}
			beer.remove(function(err) {
				if(err) {};
			})
})}