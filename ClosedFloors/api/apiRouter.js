var express = require('express');
var router = express.Router();

var v0Router = require('./v0/routes/index');

router.use('/v0', v0Router);

module.exports = router;