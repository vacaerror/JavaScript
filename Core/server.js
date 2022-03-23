'use strict'

var http = require('http');

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hola Mundo\n');
});

server.listen(1337);
console.log('Servido corriendo en http://127.0.0.1:1337')