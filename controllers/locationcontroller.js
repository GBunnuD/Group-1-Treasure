const express = require('express');
const api = express.Router();
const Model = require('../models/location');
let bodyParser = require('body-parser');

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));



exports.create = (req, res) => {
    const location = new Model({
        lId: req.body.lId,
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
    });
    location.save(err => {
        res.send({ status: 200, response: "Location Table is created successfully" });
        res.redirect('localhost:3000/display');

    })

}

exports.delete = (req, res)=>{
    const id = req.params.id;

    Model.findByIdAndRemove(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}



// GET ALL  Data from Mongo
exports.findall = (req, res) => {
    Model.find()
        .then(location => {
            res.send(location);
        });
}

exports.findbyid = (req, res) => {
    Model.findById(req.params.lId)
        .then(locations => {
            if (!locations) {
                return res.status(404).send({
                    message: "Location not found with id " + req.params.lId
                });
            }
            res.send(locations);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "location not found with id " + req.params.lId
                });
            }
            return res.status(500).send({
                message: "Something wrong retrieving location with id " + req.params.lId
            });
        });
}
exports.edit = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Product content can not be empty"
        });
    }
    

    // Find and update locations 
    Model.findByIdAndUpdate(req.params.lId, {
            lId: req.body.lId,
        }, { new: true })
        .then(location => {
            
            if (!location) {
                return res.status(404).send({
                    message: "LocationId not found with id " + req.params.lId
                });
            }
            res.send(location);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.lId
                });
            }
            return res.status(500).send({
                message: "Something wrong updating note with id " + req.params.lId
            });
        });
}