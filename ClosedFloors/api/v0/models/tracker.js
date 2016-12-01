var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var trackerSchema = new Schema({
    name: String,
    status: String,
    latestUpdate: Date,
    accessKey: String
});

mongoose.model('Tracker', trackerSchema);