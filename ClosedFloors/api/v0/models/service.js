var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
    gmapID: String,
    cachedPlace: {
        name: String,
        address: String,
        operatingTimes: String
    },
    trackers: [Schema.Types.ObjectId],
    control: String,
    lastUpdated: Date
});

mongoose.model('Service', serviceSchema);