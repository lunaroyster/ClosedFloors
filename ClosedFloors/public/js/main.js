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

app.controller('SearchController', function($scope, $http, $location) {
    $scope.loc = {
       latitude: 0,
       longitude: 0
    };
    $scope.selected = {
        service: ""
    };
    $scope.getloc = function() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                $scope.loc.latitude = position.coords.latitude;
                $scope.loc.longitude = position.coords.longitude;
                console.log($scope.loc.latitude, $scope.loc.longitude);
                $scope.$digest();
            });
        }
        
    };
    $scope.getResults = function() {
        $http({
            method: 'GET',
            url: '/api/v0/service',
            params: {
                'latitude': $scope.loc.latitude,
                'longitude': $scope.loc.longitude,
                'serviceType': $scope.selected.service
            }
        }).then(function successCallback(response) {
            searchResults = response.data;
            $location.path('/result');
        }, function errorCallback(response) {
            console.log(response);
        });
    };
});
