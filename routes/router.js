const express = require('express')
const bodyParser = require('body-parser');
const md5 = require('md5')
const router = express.Router()



router.get('/', (req, res,next) => {
    res.render('../views/index', { title: 'index' })
})
// router.get('/index', (req, res,next) => {
//   res.render('../views/index', { title: 'index' })
// })

router.post('/locations', locationController.create);
router.get('/location', locationController.findall);


module.exports = router;
