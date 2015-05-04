angular.module('app')
	.controller('BeerController', BeerController);

function BeerController($http, flowoodBeers, $timeout, $window) {
	var vm = this;
	$http.get('http://localhost:3000/beers/flowood/all')
	.then(function(data) {
		vm.data = data.data;
		console.log(vm.data)
	});

	vm.addBeer = function () {
	  if (!vm.name.length) {
	    return;
	  }
	  var newBeer = new flowoodBeers({
	    name: vm.name,
	    location: vm.location,
	    labelUrl: vm.labelUrl,
	    type: vm.type
	  });

	  newBeer.$save();
	  $http.get('http://localhost:3000/beers/flowood/all')
			.then(function(data) {
				vm.data = data.data;
			});
	  vm.name = '';
	  vm.location = '';
	  vm.labelUrl = '';
	  vm.type = ''
	 };

	 vm.deleteBeer = function(beerid) {
	 	$http.delete('http://localhost:3000/beers/flowood/delete/' + beerid)
	 	$timeout(function() {
	 		$http.get('http://localhost:3000/beers/flowood/all')
					.then(function(data) {
						vm.data = data.data;
					});
			console.log("Deleted item")
	 	}, 150)

  	
  	
  }

}