var http = require('http');

function onRequest(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write('GDP-2 Project');
    response.write('Team Members:');
    response.write('GD and Sai Krishna');
    response.end();
}

http.createServer(onRequest).listen(3000);