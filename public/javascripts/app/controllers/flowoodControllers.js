angular.module('app')
.controller('FlowoodEntreeController', FlowoodEntreeController)
.controller('FlowoodAppController', FlowoodAppController);

function FlowoodEntreeController($http, entree, $scope, $interval, $timeout) {
	var vm = this;

	$http.get('http://localhost:3000/Flowood/getEntrees')
		.then(function(data) {
			vm.data = data.data;
		});

	// $interval(function() {
	// 	$http.get('http://localhost:3000/Flowood/getEntrees')
	// 	.then(function(data) {
	// 		vm.data = data.data;
	// 	});
	// 	console.log("Interval working...")
	// }, 100);

	// vm.addEntree = function() {
	// 	$http.post('http://localhost:3000/Flowood/getEntrees')
	// }

	vm.addMenuItem = function () {
      if (!vm.name.length) {
        return;
      }
      var newEntree = new entree({
        title: vm.name,
        description: vm.description,
        options: vm.options
      });

      newEntree.$save();
      $http.get('http://localhost:3000/Flowood/getEntrees')
				.then(function(data) {
					vm.data = data.data;
				});
      vm.name = '';
      vm.description = '';
      vm.options = '';
  };
  vm.deleteMenuItem = function() {
  	$timeout(function() {
  		$http.get('http://localhost:3000/Flowood/getEntrees')
					.then(function(data) {
						vm.data = data.data;
					});
			console.log("Deleted item")
  	}, 100)
  }
}

function FlowoodAppController($http, appetizer, $timeout) {
	var vm = this;
	$http.get('http://localhost:3000/Flowood/getAppetizers')
	.then(function(data) {
		vm.data = data.data;
		console.log(vm.data)
	});

	vm.addAppetizerItem = function () {
	  if (!vm.name.length) {
	    return;
	  }
	  var newAppetizer = new appetizer({
	    title: vm.name,
	    description: vm.description,
	    options: vm.options
	  });

	  newAppetizer.$save();
	  $http.get('http://localhost:3000/Flowood/getAppetizers')
			.then(function(data) {
				vm.data = data.data;
			});
	  vm.name = '';
	  vm.description = '';
	  vm.options = '';
	 };

	 vm.deleteAppetizer = function() {
  	$timeout(function() {
  		$http.get('http://localhost:3000/Flowood/getAppetizers')
					.then(function(data) {
						vm.data = data.data;
					});
			console.log("Deleted item")
  	}, 100)
  }

}