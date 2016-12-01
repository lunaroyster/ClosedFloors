var mongoose = require('mongoose');
var Service = mongoose.model('Service');
var Tracker = mongoose.model('Tracker');


module.exports.getTrackersByService = function(serviceID, callback) {
    var serviceQuery = Service.findOne({_id:serviceID});
    serviceQuery.exec(function(err, service) {
        var trackerQuery = Tracker.find({'_id':{$in:service.trackers}});
        trackerQuery.exec(function(error, trackers) {
            callback(error, trackers);
        });
    });
};

module.exports.getTrackerByIDs = function(serviceID, trackerID, callback) {
    console.log(serviceID)
    var serviceQuery = Service.findOne({_id:serviceID});
    serviceQuery.exec(function(err, service) {
        if(service.trackers.indexOf(trackerID) > -1) {
            var trackerQuery = Tracker.findOne({_id:trackerID});
            trackerQuery.exec(function(error, tracker) {
                callback(error, tracker);
            });
        }
    });
};

module.exports.updateTrackerByID = function(trackerID, accessKey, update, callback) {
    var trackerQuery = Tracker.findOne({_id:trackerID});
    trackerQuery.exec(function(err, tracker) {
        if(tracker.accessKey == accessKey) {
            tracker.status = update.newStatus;
            tracker.latestUpdate = Date.now();
            tracker.save();
            callback(null, tracker);
        }
        else {
            callback("Bad Creds", null);
        }
    })
};

module.exports.createTracker = function(serviceID, trackerName, trackerStatus, callback) {
    var serviceQuery = Service.findOne({_id:serviceID});
    serviceQuery.exec(function(err, service) {
        if(!err){
            var trackerQuery = Tracker.findOne({name: trackerName});
            trackerQuery.exec(function(error, tracker){
                if(!tracker){
                    var newTracker = new Tracker({
                        name: trackerName,
                        status: trackerStatus,
                        latestUpdate: Date.now()
                    })
                    newTracker.save(function(err2) {
                        if(err2) {
                            callback(err2, null);
                        }
                        else {
                            service.trackers.push(newTracker._id);
                            service.save();
                            callback(null, newTracker);
                        }
                    });
                }
                else{
                    callback("Already Exists", tracker);   
                }
            });
        }
    });
};