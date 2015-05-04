var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var flowoodBeers = require('../controllers/beers/flowoodBeersController');

router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
      }
}));

router.route('/flowood/new') 
    .post(flowoodBeers.createBeer)

router.route('/flowood/all')
    .get(flowoodBeers.getBeer)

router.route('/flowood/delete/:id')
    .delete(flowoodBeers.deleteBeer)


module.exports = router;
