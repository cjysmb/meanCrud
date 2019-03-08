
const mongoose = require('mongoose');

var empSchema = new mongoose.Schema({

    name: {

        type: String
    },

    position: {

        type: String
    },

    office: {

        type: String
    },

    salary: {

        type: Number
    }

})

module.exports = mongoose.model('Employee',empSchema);