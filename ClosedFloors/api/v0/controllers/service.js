var serviceCore = require('../core/service');

module.exports.getServices = function(req, res) {
    serviceCore.getServicesByLocation(req.query.latitude, req.query.longitude, req.query.serviceType, function(err, response) {
        if(!err){
            res.status(200);
            res.json(response);
        }
    });
};

module.exports.getAService = function(req, res) {
    serviceCore.getServiceByID(req.serviceID, function(err, response) {
        res.status(200);
        res.json(response);
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