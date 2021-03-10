var http = require('http');
const express = require('express')
const path = require('path')
const engines = require('consolidate')
const app = express();
const md5 = require('md5');
const bodyParser = require('body-parser');

// function onRequest(request, response) {
//     response.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });

//     response.write('GDP-2 Project ');
//     response.write('Team Members:');
//     response.write('GD Prasad and Sai Krishna Emmadishetty');
//     response.end();
// }
app.set('view engine', 'ejs')
app.engine('ejs', engines.ejs)
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')
app.engine('ejs', engines.ejs)

const router = require('./routes/router')
app.use('/', router)
app.use(bodyParser.json({ type: "application/*+json" }));
// http.createServer().listen(3000); // port 3000 as used

app.listen(3000)