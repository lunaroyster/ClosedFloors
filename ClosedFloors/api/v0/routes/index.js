var express = require('express');
var router = express.Router();

// var v0Router = require('./v0/routes/index');

// router.use('/v0', v0Router);

router.get('/', function(req, res, next) {
    res.send("Test");
})

module.exports = router;