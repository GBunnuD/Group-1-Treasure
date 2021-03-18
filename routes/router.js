const express = require('express')
const bodyParser = require('body-parser');
const md5 = require('md5')
const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }));
var jsonParser = bodyParser.json()
require('dotenv').config();
const locationController = require('../controllers/locationcontroller')


router.get('/', (req, res,next) => {
    res.render('../views/index', { title: 'index' })
})
// router.get('/index', (req, res,next) => {
//   res.render('../views/index', { title: 'index' })
// })

router.post('/locations', locationController.create);
router.get('/location', locationController.findall);
router.get('/location/delete', locationController.delete);
router.get('/location/findbyid', locationController.findbyid);


module.exports = router;
