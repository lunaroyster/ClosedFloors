var trackerCore = require('../core/tracker');

module.exports.getTrackers = function(req, res) {
    trackerCore.getTrackersByService(req.serviceID, function(err, trackers){
        res.json(trackers);
    })
};

module.exports.getATracker = function(req, res) {
    trackerCore.getTrackerByIDs(req.serviceID, req.trackerID, function(err, tracker) {
        res.json(tracker);
    });
};
module.exports.createATracker = function(req, res) {
    req.trackerName = req.query.trackerName;
    req.trackerStatus = req.query.trackerStatus;
    trackerCore.createTracker(req.serviceID, req.trackerName, req.trackerStatus, function(err, response) {
        res.json(response);
    });
};
module.exports.updateATracker=function(req, res) {
    
};
module.exports.trackerIDAppend = function(req, res, next) {
    req.trackerID = req.params.trackerID;
    console.log(req.trackerID);
    next();
};
