var mongoose = require('mongoose');
var Service = mongoose.model('Service');

var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyAzuA62GBZmVCe8BQR9QYOt0hOK0E-7zpY'
});

var typeMap = new Map();
typeMap.set("ATM", "atm");
typeMap.set("Petrol Pump", "gas_station");
typeMap.set("Bakery", "atm");
typeMap.set("Bar", "atm");
typeMap.set("Library", "libraru");
typeMap.set("Hospital", "hospital");
typeMap.set("Museum", "museum");
typeMap.set("Gym", "gym");


module.exports.getServicesByLocation = function(latitude, longitude, serviceType, callback) {
    googleMapsClient.placesNearby({
        type: typeMap.get(serviceType),
        location: [latitude, longitude],
        radius: 1000
    }, function(err, response) {
        if(!err) {
            var resultResponse = [];
            var newServices = [];
            var results = response.json.results;
            for (var i = 0; i < results.length; i++) {
                
            }
            Service.collection.insert(newServices, null,  function(){
                callback()
            })
            // var results = response.json.results;
            // for (var i=0;i<results.length;i++) {
            //     var res = results[i];
            //     console.log(res);
            //     var newService = new Service({
            //         gmapID: res.place_id
            //     });
            //     var serviceQuery = Service.findOne({gmapID: res.place_id});
            //     serviceQuery.exec(function(err, service) {
            //         // resultResponse.push(results[i]);
            //         if(!service){
            //             newService.save(function(err){
            //                 if(!err){
            //                     resultResponse.push(newService);
            //                 }
            //             });
            //         }
            //         else {
            //             resultResponse.push(service);
            //         }
            //     });
            // }
            
        }
        
    });
};

module.exports.getServiceByID = function(serviceID, callback) {
    console.log(serviceID)
    var serviceQuery = Service.findOne({_id:serviceID});
    serviceQuery.exec(function(err, service) {
        callback(err, service);
    });
};

module.exports.updateServiceByID = function(serviceID, update, callback) {
    
};
