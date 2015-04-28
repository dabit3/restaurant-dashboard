var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var flowood = require('../controllers/flowoodController');

router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
      }
}));

router.route('/getAppetizers')
	.get(function(req, res, next) {
		mongoose.model('FlowoodAppetizers').find({}, function(err, items) {
			if(err) {

			} else {
				res.json(items)
			}
		})
	})

router.route('/appetizers')
	.post(function(req, res) {
		var title = req.body.title;
		var description = req.body.description;
		var option = req.body.option;
		mongoose.model('FlowoodAppetizers').create({
			title: title, 
			description: description, 
			option: option
		}, function(err, appetizer) {
			if (err) {
				console.log('there was an error')
			} else {
				console.log('Appetizer created: ' + appetizer);
				res.redirect('/#/appetizers')
			}
		})
	});
router.route('/appetizers/delete/:id')
	.get(function(req, res) {
		mongoose.model('FlowoodAppetizers').findById(req.params.id, function(err, appetizer) {
			if(err) {return next(err);}
			appetizer.remove(function(err) {
				if(err) {}
				res.redirect('/#/appetizers')
			})
		});
	})

router.route('/entrees')
	.post(function(req, res) {
		var title = req.body.title;
		var description = req.body.description;
		var option = req.body.option;
		mongoose.model('FlowoodEntrees').create({
			title: title, 
			description: description, 
			option: option
		}, function(err, appetizer) {
			if (err) {
				console.log('there was an error')
			} else {
				console.log('Entree created: ' + appetizer);
				res.redirect('/#/entrees')
			}
		})
	});

router.route('/entrees/delete/:id')
	.get(function(req, res) {
		mongoose.model('FlowoodEntrees').findById(req.params.id, function(err, appetizer) {
			if(err) {return next(err);}
			appetizer.remove(function(err) {
				if(err) {}
				res.redirect('/#/entrees')
			})
		});
	})

router.route('/entrees/new')
	.post(flowood.createEntree); 

router.route('/appetizers/new')
	.post(flowood.createAppetizer)

router.route('/getEntrees')
	.get(function(req, res, next) {
		mongoose.model('FlowoodEntrees').find({}, function(err, items) {
			if(err) {

			} else {
				res.json(items)
			}
		})
	})


	module.exports = router;
