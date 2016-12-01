var express = require('express');
var router = express.Router();

var trackerController = require('../controllers/tracker');

router.use('/', trackerController.getTrackers);
router.use('/:trackerID', trackerController.trackerIDAppend, trackerController.getTracker);

module.exports = router;