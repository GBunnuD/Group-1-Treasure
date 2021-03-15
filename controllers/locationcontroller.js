
const express = require('express');
const api = express.Router();
const find = require('lodash.find');
const LOG = require('../utils/logger');
const Model = require('../models/location');

const notfoundstring = 'Could not find developer with id=';

// RESPOND WITH JSON DATA  --------------------------------------------

// GET all JSON
api.get('/findall', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const data = req.app.locals.developers.query;
  res.send(JSON.stringify(data));
});