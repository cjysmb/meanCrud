
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/crudDB', { useNewUrlParser: true} , (err) => {

    if(!err) {

        console.log('Connected to MongoDB!!');

    } else {

        console.log('Unable to connect, ERROR: ' + err);

    }
});

require('./employee');