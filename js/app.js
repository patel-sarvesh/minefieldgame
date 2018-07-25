var app = angular.module('snakeGame', ['ngRoute'])

.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

	$routeProvider
    .when("/snake-game", {
        templateUrl : "./view/snake.html",
        controller: 'snakeCtrl'
    })

    .otherwise({ redirectTo: '/snake-game' });
}])