var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({

    PolicyStartDate: {
        type: String,
        Required: 'Product name cannot be left blank.'
    },

    PolicyEndDate: {
        type: String,
        Required: 'Product price cannot be left blank.'
    },

    PolicyMode: {
        type: String,
        Required: 'Product category cannot be left blank'
    },

    PolicyNumber: {
        type: String
    },
    PolicyType: {
        type: String
    }
});

module.exports = mongoose.model('PolicyInfos', userSchema);