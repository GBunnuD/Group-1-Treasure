var http = require('http');
const express = require('express')
const path = require('path')
const engines = require('consolidate')
const app = express();
function onRequest(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    
    response.write('GDP-2 Project ');
    response.write('Team Members:');
    response.write('GD Prasad and Sai Krishna Emmadishetty');
    response.end();
}
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')
app.engine('ejs', engines.ejs)
http.createServer(onRequest).listen(3000); // port 3000 as used
