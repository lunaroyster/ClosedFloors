var express = require('express');
var router = express.Router();

var serviceController = require('../controllers/service');


var trackerRouter = require('./tracker');
// TODO: append trackerRouter
router.use('/', serviceController.getServices);
router.use('/:serviceID', serviceController.serviceIDAppend, serviceController.getService);
router.use('/:serviceID/tracker', serviceController.serviceIDAppend, trackerRouter);

module.exports = router;