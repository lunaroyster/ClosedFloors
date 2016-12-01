module.exports.getTrackers = function(req, res) {
    res.status(200);
    res.send("Trackers for Service " + req.serviceID);
};

module.exports.getATracker = function(req, res) {
    res.send("Tracker " + req.trackerID + " for Service " + req.serviceID);
};

module.exports.trackerIDAppend = function(req, res, next) {
    req.trackerID = req.params.trackerID;
    console.log(req.trackerID);
    next();
};