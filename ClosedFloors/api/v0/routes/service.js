var express = require('express');
var router = express.Router();

var serviceController = require('../controllers/service');
var trackerController = require('../controllers/tracker');

router.get('/', serviceController.getServices);
router.get('/:serviceID', serviceController.serviceIDAppend, serviceController.getAService);
router.patch('/:serviceID', serviceController.serviceIDAppend, serviceController.updateAService);

router.get('/:serviceID/tracker', serviceController.serviceIDAppend, trackerController.getTrackers);
router.post('/:serviceID/tracker', serviceController.serviceIDAppend, trackerController.createATracker);

router.get('/:serviceID/tracker/:trackerID', serviceController.serviceIDAppend, trackerController.trackerIDAppend, trackerController.getATracker);
router.patch('/:serviceID/tracker/:trackerID', serviceController.serviceIDAppend, trackerController.trackerIDAppend, trackerController.updateATracker);

module.exports = router;