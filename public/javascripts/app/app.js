var app = angular.module('app', ['ui.router', 'ngResource']);

app.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'views/client/home'
	})
	.state('locations', {
		url: 'locations',
		templateUrl: 'views/client/locations',
		controller: 'LocationsController',
		controllerAs: 'location'
	})
	.state('menus', {
		url: 'menus', 
		templateUrl: 'views/client/menus'
	})
	.state('menus.flowood', {
		url: 'flowood/dashboard', 
		templateUrl: 'views/client/locations/flowood/dashboard'
	})
	.state('menus.flowood.appetizers', {
		url: 'appetizers',
		templateUrl: 'views/client/locations/flowood/appetizers',
		controller: 'FlowoodAppController',
		controllerAs: 'app'
	})
	.state('menus.flowood.entrees', {
		url: 'entrees',
		templateUrl: 'views/client/locations/flowood/entrees',
		controller: 'FlowoodEntreeController',
		controllerAs: 'entree'
	})

	$urlRouterProvider.otherwise( '/');
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
	return $resource('locations', {
		itemId: '@_id'
	}, {
		update: {
			method: 'PUT'
		}
	});
});

