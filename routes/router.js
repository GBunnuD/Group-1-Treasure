const express = require('express')
const bodyParser = require('body-parser');
const md5 = require('md5')
const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }));
// const sqldb = require('.././database')
// const axios = require('axios')
var jsonParser = bodyParser.json()

router.get('/', (req, res) => {
    res.render('../views/index', { title: 'index' })
})

module.exports = router;