const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const helmet = require('helmet');
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
// LOG.info('app created');

// Helper functions defined first ...................................

/**
 * Normalize a port into a number, string, or false.
 */
var http = require('http');
// const express = require('express')
// const path = require('path')
// const engines = require('consolidate')
// const app = express();
const md5 = require('md5');
// const bodyParser = require('body-parser');
const port = process.env.PORT || 3001

/**
 * Load environment variables from .env file,
 *  where API keys and passwords can be configured.
 */
const vars = dotenv.config({ path: '.env' });
if (vars.error) {
  throw vars.error;
}
// LOG.info(`Environment variables loaded: ${vars.parsed}`);

/**
 * Get port from environment and store in Express.
 */

// LOG.info(`Server Launch at port: ${port}`);

// By default, Express does not serve static files.
// use middleware to define a static assets folder 'public'
app.use(express.static('public'));

// Helmet helps you secure Express apps by setting various HTTP headers.
// It's not a silver bullet, but it can help!
// https://github.com/helmetjs/helmet
app.use(helmet());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', engines.ejs);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(expressLayouts);


// load seed data
// require('./utils/seeder.js')(app);

// Use Express middleware to configure routing
// const routing = require('./routes/router.js');

app.set('view engine', 'ejs')
app.engine('ejs', engines.ejs)
app.set('views', path.join(__dirname, './views/'))
app.set('view engine', 'ejs')
app.engine('ejs', engines.ejs)

const router = require('./routes/router')
app.use('/', router)
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(express.static(__dirname + '/public/'));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then((res) =>{
  app.listen(3000, function () {
  return "Connected to Database"
  
})
}).catch((e) => {
 console.log(e,"--error")
})