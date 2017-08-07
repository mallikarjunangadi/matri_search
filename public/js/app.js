angular.module('matrisearch', [])

.config(function($routeProvider, $locationProvider) {
	$routeProvider
	
	.when('/', {
		templateUrl:'templates/search.html'
	})
	
	.when('/search', {
		templateUrl:'templates/search.html'
	})
	
	.when('/matchedList', {
		templateUrl:'templates/matchedList.html'
	})
})