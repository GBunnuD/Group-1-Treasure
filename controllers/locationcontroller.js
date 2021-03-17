
const express = require('express');
const api = express.Router();
const Model = require('../models/location');  
let bodyParser = require('body-parser');

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));



exports.create = (req, res) => {
  const location = new Model({
      name: req.body.name,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      radius: 100,
    });
   location.save(err => {
               res.send({ status: 200, response: "Location Table is created successfully" });
    } )
}


// GET ALL  Data from Mongo
exports.findall = (req, res) => {
  Model.find()
  .then(locations => {
      res.send(locations);
  });
}