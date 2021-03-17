
const express = require('express');
const api = express.Router();
const find = require('lodash.find');
const LOG = require('../utils/logger');
const Model = require('../models/location');  
let bodyParser = require('body-parser');

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));
const notfoundstring = 'Could not find developer with id=';


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


