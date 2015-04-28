angular.module('app')
.controller('LocationsController', LocationsController);

function LocationsController(location) {
	var vm = this;
	location.query()
	.$promise
	.then(function(data) {
		vm.locations = data;
		console.log(vm.locations);
		console.log(vm.locations[0].address)
	});

	vm.addLocation = function () {
      if (!vm.city.length) {
        return;
      }
      var newLocation = new location({
        city: vm.city,
        address: vm.address,
        zip: vm.zip,
       	state: vm.state,
       	phone: vm.phone
      });

      newLocation.$save();
      location.query()
			.$promise
			.then(function(data) {
				vm.locations = data;
				console.log(vm.locations);
				console.log(vm.locations[0].address)
			});
      vm.city = '';
      vm.address = '';
      vm.zip = '';
      vm.state = '';
      vm.phone = '';
  };	    

}