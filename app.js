var app = angular.module('app', ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	$locationProvider.html5Mode(true);

	$urlRouterProvider.otherwise( function($injector, $location) {
        var $state = $injector.get("$state");
        $state.go("uno");
    });

	$stateProvider
		.state('uno', {
			url: '/uno',
			templateUrl: 'templates/uno.html'
		})
		.state('dos', {
			url: '/dos',
			templateUrl: 'templates/dos.html'
		})
		.state('tres', {
			url: '/tres',
			templateUrl: 'templates/tres.html'
		})
});
