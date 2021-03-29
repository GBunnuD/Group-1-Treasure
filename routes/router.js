const express = require('express')
const bodyParser = require('body-parser');
const md5 = require('md5')
const router = express.Router()
var jsonParser = bodyParser.json()
require('dotenv').config();
const services = require('../render');
const locationController = require('../controllers/locationcontroller')

// router.get('/', (req, res, next) => {
//     res.render('../views/index', { title: 'index' })
// })

router.get('/GD', (req, res, next) => {
    res.render('../views/GD', { title: 'GD' })
})

router.get('/aboutme', (req, res, next) => {
    res.render('../views/aboutme', { title: 'aboutme' })
})

router.get('/', locationController.getHomePage)
router.get('/location/display', services.displays);
router.get('/location/create', services.addlocation);
router.get('/location/editview/:locationId', services.editLocation);

router.post('/locations', locationController.create);
router.get('/location', locationController.findall);
router.post('/location/edit/:id', locationController.edit);
router.post('/location/delete/:id', locationController.delete)
router.get('/locations/random', locationController.random);


module.exports = router;