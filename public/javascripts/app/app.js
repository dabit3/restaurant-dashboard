var app = angular.module('app', ['ui.router']);

app.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'views/client/home'
	})
	.state('home.menus', {
		url: 'menus', 
		templateUrl: 'views/client/menus'
	})
	.state('home.flowood', {
		url: 'flowood/dashboard', 
		templateUrl: 'views/client/locations/flowood/dashboard'
	})
	.state('home.flowood.appetizers', {
		url: 'appetizers',
		templateUrl: 'views/client/locations/flowood/appetizers'
	})
	.state('home.flowood.entrees', {
		url: 'entrees',
		templateUrl: 'views/client/locations/flowood/entrees'
	})

	$urlRouterProvider.otherwise( '/');
})

app.controller('FlowoodAppController', FlowoodAppController);

function FlowoodAppController($http) {
	var vm = this;
	$http.get('http://localhost:3000/Flowood/getAppetizers')
	.then(function(data) {
		vm.data = data.data;
		console.log(vm.data)
	});
}

app.controller('FlowoodEntreeController', FlowoodEntreeController);

function FlowoodEntreeController($http) {
	var vm = this;
	$http.get('http://localhost:3000/Flowood/getEntrees')
	.then(function(data) {
		vm.data = data.data;
		console.log(vm.data)
	});
	vm.addEntree = function(http) {
		$http.post('http://localhost:3000/Flowood/getEntrees')
	}
}