
const express = require('express');
let router = express.Router();
const mongoose = require('mongoose');
const Employee =  require('../models/employee');
let objectId = require('mongoose').Types.ObjectId;

router.get('/', (req, res) => {

    Employee.find((err,doc) => {

        if(!err) {

            res.send(doc);

        } else {

            console.log('Error: ' + err);
        }
    });
});

router.get('/:id', (req, res) => {

    if(!objectId.isValid(req.params.id))

        return res.status(400).send(`No record in that ID: ${req.params.id}`);

    Employee.findById(req.params.id, (err,doc) => {

        if(!err){

            res.send(doc);

        } else {

            console.log('Error on retrieving: ' + err);

        }
    })
})

router.post('/', (req, res) => {
   
   insertRecord(req, res);

})

router.put('/:id', (req, res) => {

    if(!objectId.isValid(req.params.id))

        return res.status(400).send(`No record in that ID: ${req.params.id}`);

    let employee = {

        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,

    }; 

    Employee.findByIdAndUpdate(req.params.id, { $set: employee }, { new: true}, (err, doc) => {

        if(!err) {

            res.send(doc);

        } else {

            console.log('unable to update: ' +err);

        }
    });
})

router.delete('/:id', (req, res) => {

    if(!objectId.isValid(req.params.id))

        return res.status(400).send(`No record in that ID: ${req.params.id}`);

    Employee.findByIdAndDelete(req.params.id , (err, doc) => {

        if(!err) {

            res.send(doc);

        } else {

            console.log('Error to delete employee: ' +err);

        }
    })
})


function insertRecord(req,res) {

    let emp = new Employee();

    emp.name = req.body.name;
    emp.position = req.body.position;
    emp.office = req.body.office;
    emp.salary = req.body.salary;

    emp.save((err,doc) => {

        if(err) {

            return next(err);

        } else {

            res.send(doc);
        }
    })
}


module.exports = router;