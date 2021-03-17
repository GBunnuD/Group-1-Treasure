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

module.exports = {
    all: function(req, res){
        res.send('All todos')
    },
    viewOne: function(req, res){
        console.log('Viewing ' + req.params.id);
    },
    create: function(req, res){
        console.log('Todo created')
    },
    destroy: function(req, res){
        console.log('Todo deleted')
    },
    edit: function(req, res){
        console.log('Todo ' + req.params.id + ' updated')
    }
};


router.get('/', (req, res,next) => {
    res.render('../views/index', { title: 'index' })
})
router.get('/index', (req, res,next) => {
  res.render('../views/index', { title: 'index' })
})

// router.post('/locations', locationController.findall)
router.post('/location/', locationController.create);
router.get('/location/', locationController.findall);


module.exports = router;
