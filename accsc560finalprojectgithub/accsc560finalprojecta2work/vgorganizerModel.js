//vgorganizerModel.js down below
//Purpose of code here: Helps make the model in the first place.

var mongoose = require('mongoose');

//schema itself down below

//Important note: Gathered sales figures from December 31st, 2022 and onwards.

var vgorganizerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    system: {
        type: String,
        required: true
    },

    publisher: {
        type: String,
        required: true
    },

    eshopUSApriceindollars: {
        type: Number,
        required: true
    },

    rating: {
        type: String,
        required: true
    },

    owngame: {
        type: String,
        required: true
    },

    beatmainstory: {
        type: String,
        required: true
    },

    unitssoldtotal: {
        type: Number,
        required: true
    },

    releaseyear: {
        type: Number,
        required: true
    },

    personalratingoutoften: {
        type: Number,
        required: true
    }

});

//Sends out the Vgorganizer Model
var Vgorganizer = module.exports = mongoose.model('vgorganizer', vgorganizerSchema);

module.exports.get = function (callback, limit) {
    Vgorganizer.find(callback).limit(limit);
}
