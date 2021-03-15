const express = require('express')
const bodyParser = require('body-parser');
const md5 = require('md5')
const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }));
var jsonParser = bodyParser.json()
const { Pool } = require('pg');
let pool = new Pool();
require('dotenv').config();
const locationController = require('../controllers/locationcontroller')



router.get('/', (req, res,next) => {
    res.render('../views/index', { title: 'index' })
})
router.get('/index', (req, res,next) => {
  res.render('../views/index', { title: 'index' })
})

router.get('/location/', locationController.findall)




module.exports = router;
