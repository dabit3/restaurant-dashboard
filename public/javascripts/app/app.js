var app = angular.module('app', ['ui.router', 'ngResource']);

app.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'views/home.html',
		controller: 'MainController'
	})
	.state('locations', {
		url: '/locations',
		templateUrl: 'views/locations.html',
		controller: 'LocationsController',
		controllerAs: 'location'
	})
	.state('menus', {
		url: '/menus',
		templateUrl: 'views/menus.html',
		controller: 'MainController'
	})
	.state('menus.flowood', {
		url: '/flowood/dashboard',
		templateUrl: 'views/locations/flowood/dashboard.html'
	})
	.state('menus.flowood.appetizers', {
		url: '/appetizers',
		templateUrl: 'views/locations/flowood/appetizers.html',
		controller: 'FlowoodAppController',
		controllerAs: 'app'
	})
	.state('menus.flowood.entrees', {
		url: '/entrees',
		templateUrl: 'views/locations/flowood/entrees.html',
		controller: 'FlowoodEntreeController',
		controllerAs: 'entree'
	})

	$urlRouterProvider.otherwise( '/home');
});

app.factory('entree', function ($resource) {
    return $resource('flowood/entrees/new', {
    	 itemId: '@_id'
    	}, {
    		update: {
    			method: 'PUT'
    		}
    	});
  });

app.factory('appetizer', function ($resource) {
    return $resource('flowood/appetizers/new', {
    	 itemId: '@_id'
    	}, {
    		update: {
    			method: 'PUT'
    		}
    	});
  });

app.factory('location', function($resource) {
	return $resource('/locations', {
		itemId: '@_id'
	}, {
		update: {
			method: 'PUT'
		}
	});
});

