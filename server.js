const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const port = process.env.PORT || 3000;
app.set('port', port);

server.listen(3000, '192.168.0.201' || 'localhost', function() {
    console.log('Servidor conrriendo en el puerto ' + port)
});
