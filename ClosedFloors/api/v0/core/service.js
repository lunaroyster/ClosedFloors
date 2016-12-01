var mongoose = require('mongoose');

var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyAzuA62GBZmVCe8BQR9QYOt0hOK0E-7zpY'
});

var typeMap = new Map();
typeMap.set("ATM", "atm");
typeMap.set("Petrol Bunk", "gas_station");

module.exports.getServicesByLocation = function(latitude, longitude, serviceType, callback) {
    googleMapsClient.placesNearby({
        type: typeMap.get(serviceType),
        location: [latitude, longitude],
        radius: 1000
    }, function(err, response) {
        var resultResponse = [];
        if(!err) {
            var results = response.json.results;
            for (var i=0;i<results.length;i++) {
                // Query here
                resultResponse.push(results[i]);
            }
        }
        callback(err, resultResponse);
    });
};

module.exports.getServiceByID = function(serviceID, callback) {
    
};

module.exports.updateServiceByID = function(serviceID, update, callback) {
    
}