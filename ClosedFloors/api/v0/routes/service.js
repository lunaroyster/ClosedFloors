var express = require('express');
var router = express.Router();

var serviceController = require('../controllers/service');
var trackerController = require('../controllers/tracker');

// TODO: append trackerRouter
router.get('/', serviceController.getServices);
router.get('/:serviceID', serviceController.serviceIDAppend, serviceController.getAService);
router.get('/:serviceID/tracker', serviceController.serviceIDAppend, trackerController.getTrackers);
router.get('/:serviceID/tracker/:trackerID', serviceController.serviceIDAppend, trackerController.trackerIDAppend, trackerController.getATracker);

module.exports = router;