angular.module('matrisearch', ['ngRoute', 'matrisearch.controller', 'matrisearch.services'])

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

	.when('/viewProfile', {
		templateUrl:'templates/viewProfile.html'
	})

	$locationProvider.html5Mode(true);
})