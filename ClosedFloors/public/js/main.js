/* global angular $ navigator*/

var app = angular.module('closedFloors', ['ngRoute', 'ngAnimate']);

var searchResults = [{
    name: "Name",
    address: "Address Line",
    trackers: [{
        status: "Online",
        name: "First Tracker"
    },
    {
        status: "Offline",
        name: "Second Tracker"
    }
    ]
}];

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
       longitude: 0,
       address: 0
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
    $scope.getPostalCode = function() {
        $scope.loc.address = document.getElementById('postalcode').value
        $http({
                method: 'GET',
                url: 'https://maps.googleapis.com/maps/api/geocode/json',
                params: {
                    'address': $scope.loc.address,
                    'sensor': true
                }
        }).then(function(response) {
            console.log("TRIGGERED AGAIN", response)
            $scope.loc.latitude = response.data.results[0].geometry.location.lat
            $scope.loc.longitude = response.data.results[0].geometry.location.lng
            console.log($scope.loc.latitude, $scope.loc.longitude)
        }, function(error) {
            console.log(error)
        })
    }
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

app.controller('ResultController', function($scope) {
    $scope.resultmessage = "There are no results to view. Try searching again.";
    $scope.messageInvisibility = false;
    $scope.searchResults = [];
    $scope.loadResults = function() {
        if(searchResults.length==0) {
            $scope.resultmessage = "There are no results to view. Try searching again.";
            $scope.searchResults = [];
        }
        else {
            $scope.resultmessage = "Your results:";
            $scope.searchResults = searchResults;
        }
    };
});

app.controller('SavedController', function($scope) {

});
