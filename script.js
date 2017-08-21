	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/projects.html',
				controller  : 'projectsController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'This is Marcel Masaga -Welcome everyone, Come and see how good I am at MEAN Stack!';
	});

	scotchApp.controller('projectsController', function($scope) {
		$scope.message = 'Check out my portofolio and on-going projects .';
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact Marcel Masaga. This is just a demo.';
	});