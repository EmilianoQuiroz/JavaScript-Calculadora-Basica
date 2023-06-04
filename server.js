const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');

/**
 * Importacion de rutas
 */
const usersRoutes = require('./routes/userRoutes');

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

app.use(cors());

app.disable('x-powered-by');

app.set('port', port);

/**
 * Llamado a las rutas
 */
usersRoutes(app);

server.listen(3000, '192.168.0.201' || 'localhost', function() {
    console.log('Servidor conrriendo en el puerto ' + port)
});

app.get('/', (req, res) => {
    res.send('Ruta raiz del backend');
});

app.get('/test', (req, res) => {
    res.send('Ruta de test');
});

// Manejador de Errores
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
})