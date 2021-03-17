// const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const helmet = require('helmet');
var env = require('dotenv').config()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const engines = require('consolidate');
const mongoose = require("mongoose");
const expressLayouts = require('express-ejs-layouts');

// const LOG = require('./utils/logger');

// env variables
const hostname = process.env.HOSTNAME;
const isProduction = process.env.NODE_ENV === 'production';
// LOG.info('Environment isProduction = ', isProduction);

// create an Express app
const app = express();
require('dotenv').config({path:'config.env'});



var http = require('http');



// const vars = env.config({ path: '.env' });
// if (vars.error) {
//   throw vars.error;
// }
//
app.use(express.static('public'));

app.use(helmet());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', engines.ejs);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs')
app.engine('ejs', engines.ejs)
app.set('views', path.join(__dirname, './views/'))
app.set('view engine', 'ejs')
app.engine('ejs', engines.ejs)

const router = require('./routes/router')
app.use('/', router)
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(express.static(__dirname + '/public/'));
// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`, app.settings.env)
// })


mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then((res) =>{
  app.listen(3000, function () {
  return "Connected to Database"
  
})
}).catch((e) => {
 console.log(e,"--error")
})