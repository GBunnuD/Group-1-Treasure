var http = require('http');
const express = require('express')
const path = require('path')
const engines = require('consolidate')
const app = express();
const md5 = require('md5');
const bodyParser = require('body-parser');


app.set('view engine', 'ejs')
app.engine('ejs', engines.ejs)
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')
app.engine('ejs', engines.ejs)

const router = require('./routes/router')
app.use('/', router)
app.use(bodyParser.json({ type: "application/*+json" }));


app.listen(3000)
