const usersController = require('../controllers/usersController');

module.exports = (app, upload) => {

    // GET -> OBTENER DATOS
    // POST -> ALMACENAR DATOS
    // PUT -> ACTUALIZAR DATOS
    // DELETE -> ELIMINAR DATOS

    app.post('/api/users/create', usersController.register);
    app.post('/api/users/createWidthImage', upload.array('image', 1), usersController.registerWidthImage);
    app.post('/api/users/login', usersController.login);
}