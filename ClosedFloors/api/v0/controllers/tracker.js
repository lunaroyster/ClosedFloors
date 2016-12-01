var trackerCore = require('../core/tracker');

module.exports.getTrackers = function(req, res) {
    res.status(200);
    res.send("Trackers for Service " + req.serviceID);
};

module.exports.getATracker = function(req, res) {
    res.send("Tracker " + req.trackerID + " for Service " + req.serviceID);
};
module.exports.createATracker = function(req, res) {
    req.trackerName = req.query.trackerName;
    trackerCore.createTracker(req.serviceID, req.trackerName, function(err, response) {
        res.json(response);
    });
};
module.exports.updateATracker=function(req, res) {
    res.send("Tracker " + req.trackerID + " updated for Service " + req.serviceID);
};
module.exports.trackerIDAppend = function(req, res, next) {
    req.trackerID = req.params.trackerID;
    console.log(req.trackerID);
    next();
};
