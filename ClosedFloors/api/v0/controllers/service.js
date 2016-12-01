var serviceCore = require('../core/service');

module.exports.getServices = function(req, res) {
    serviceCore.getServicesByLocation(req.query.latitude, req.query.longitude, req.query.serviceType, function(response) {
        res.status(200);
        res.send(JSON.stringify(response));
    });
};

module.exports.getAService = function(req, res) {
    serviceCore.getServiceByID(req.query.serviceID, function(response) {
        res.status(200);
        res.send(JSON.stringify(response));
    });
};
module.exports.updateAService = function(req, res) {
    res.send("Update Service " + req.serviceID);
};
module.exports.serviceIDAppend = function(req, res, next) {
    req.serviceID = req.params.serviceID;
    console.log(req.serviceID);
    next();
};