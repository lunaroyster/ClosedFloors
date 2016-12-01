/* global angular $ navigator*/

var app = angular.module('closedFloors', ['ngRoute', 'ngAnimate']);

// This code handles the GUI and is a requirement of Single Page Applications. It doesn't provide any other function.
app.config(function($routeProvider) {
    $routeProvider
    
    .when('/', {
        controller  : 'SearchController',
        controllerAs: 'search',
        templateUrl : './search.html'
    })
    
    .when('/result', {
        controller  : 'ResultController',
        controllerAS: 'result',
        templateUrl : './result.html'
    })
    
    .when('/saved', {
        controller  : 'SavedController',
        templateUrl : './saved.html'
    })
    
    .otherwise({redirectTo: '/'});
    
});
