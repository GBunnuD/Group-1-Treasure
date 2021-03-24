const express = require('express')
const bodyParser = require('body-parser');
const md5 = require('md5')
const router = express.Router()
    // router.use(bodyParser.urlencoded({ extended: true }));
var jsonParser = bodyParser.json()
require('dotenv').config();
const services = require('../render');
// const axios = require('axios');
const locationController = require('../controllers/locationcontroller')





router.get('/', (req, res, next) => {
    res.render('../views/index', { title: 'index' })
})

router.get('/GD', (req, res, next) => {
    res.render('../views/GD', { title: 'GD' })
})

router.get('/aboutme', (req, res, next) => {
    res.render('../views/aboutme', { title: 'aboutme' })
})

router.get('/location/display', services.displays);
// router.get('/editview', services.updateLocation);
router.get('/location/create', services.addlocation);
router.get('/location/editview/:locationId', services.editLocation);
// router.get('/deleteview/:locationId', services.deletelocation);


router.post('/locations', locationController.create);
router.get('/location', locationController.findall);

// router.delete('/location/delete/:locationId', locationController.delete);
// router.get('/location/findbyid/:id', locationController.findbyid);
router.post('/location/edit/:id', locationController.edit);
router.post('/location/delete/:id', locationController.delete)


module.exports = router;