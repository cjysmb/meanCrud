
require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const empController = require('./controllers/emp.controller');
const cors = require('cors');

let app = express();
let port = 3001 ;

app.use(bodyParser.urlencoded ({

    extended: true
 
 }))

app.use(bodyParser.json());
app.use(cors( {origin: 'http://localhost:4200'}));

app.listen(port, () => {

    console.log('Port is connected to: ' +port);

});

app.use('/employee', empController);