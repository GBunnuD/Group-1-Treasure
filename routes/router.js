const express = require('express')
const bodyParser = require('body-parser');
const md5 = require('md5')
const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }));
// const sqldb = require('.././database')
// const axios = require('axios')
var jsonParser = bodyParser.json()
const { Pool } = require('pg');
// const pg = require('pg');
let pool = new Pool();
require('dotenv').config();
constLocationController = require('../controllers/locationcontroller')



router.get('/', (req, res,next) => {
    res.render('../views/index', { title: 'index' })
})

router.get('/ldata', (req, res,next) => {

  res.sendFile('locationdata.html');
});



// Route requests that start with '/dev' to a particular controller
// router.use('/', require('../controllers/locationcontroller'));



module.exports = router
