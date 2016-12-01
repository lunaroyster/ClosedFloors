var express = require('express');
var router = express.Router();

// TODO: controller links

// var v0Router = require('./v0/routes/index');
var serviceRouter = require('./service');
// router.use('/v0', v0Router);

router.use('/service', serviceRouter);

module.exports = router;