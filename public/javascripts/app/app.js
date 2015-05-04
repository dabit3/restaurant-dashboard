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
	.state('beer', {
		url: '/beer',
		templateUrl: 'views/beer/index.html',
		controller: 'BeerController'
	})
	.state('beer.flowood', {
		url: '/flowood',
		templateUrl: 'views/beer/flowood.html',
		controller: 'BeerController',
		controllerAs: 'beer'
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
    return $resource('flowood/entrees', {
    	 itemId: '@_id'
    	}, {
    		update: {
    			method: 'PUT'
    		},
    		delete: { method: 'DELETE', params: {id: '@id'} }
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

app.factory('flowoodBeers', function($resource) {
	return $resource('/beers/flowood/new', {
		itemId: '@_id'
	}, {
		update: {
			method: 'PUT'
		}
	});
});
