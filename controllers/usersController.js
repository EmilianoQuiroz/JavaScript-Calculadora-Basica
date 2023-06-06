const User = require('../models/user');

module.exports = {
    register(req, res){

        const user = req.body;// Capturo los datos que me manda el cliente
        User.create(user, (err, data) => {
        console.log('Datos del usuario', user);

            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Error en el registro del usuario',
                    error: err
                });
            }
            
            return res.status(201).json({
                success: true,
                message: 'El registro del usuario se realizo correctamente',
                data: data// El Id del nuevo usuario que se regitro        
            });
        });
    }
}