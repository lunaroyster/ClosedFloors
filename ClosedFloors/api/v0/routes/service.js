var express = require('express');
var router = express.Router();

// TODO: controller links

var trackerRouter = require('./tracker');
// TODO: append trackerRouter
router.use('/', );
router.use('/:serviceID', );
router.use('/:serviceID/tracker', trackerRouter);

module.exports = router;