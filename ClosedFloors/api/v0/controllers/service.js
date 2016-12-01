module.exports.getServices = function(req, res) {
    res.send("Get Services");
};

module.exports.getAService = function(req, res) {
    res.send("Get service: " + req.serviceID);
};
module.exports.updateAService = function(req, res) {
    res.send("Update Service " + req.serviceID);
};
module.exports.serviceIDAppend = function(req, res, next) {
    req.serviceID = req.params.serviceID;
    console.log(req.serviceID);
    next();
};