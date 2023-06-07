const User = require('../models/user');
const bcrypt = require('bcryptjs');
const keys = require('../config/keys');
module.exports = {

    login(req, res) {
        const email = req.body.email;
        const password = req.body.password;
        const jwt = require('jsonwebtoken');

        User.findByEmail(email, async(err, myUser) => {

            console.log('Error', err);
            console.log('Usuario', myUser);

            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del usuario',
                    error: err
                });
            }

            if (!myUser) {
                return res.status(401).json({// El cliente no tiene autorizacion para realizar esta peticion(401)
                    success: false,
                    message: 'El email no fue encontrado'
                });
            }
            // Se compara la pw que pone el usuario con la pw encriptada que se guarda en la db
            const isPasswordValid = await bcrypt.compare(password, myUser.password);

            if(isPasswordValid) {
                const token = jwt.sign({id: myUser.id, email: myUser.email}, keys.secretOrKey, {});

                const data = {
                    id: myUser.id,
                    name: myUser.name,
                    lastname: myUser.lastname,
                    email: myUser.email,
                    phone: myUser.phone,
                    image: myUser.image,
                    session_token: `JWT ${token}`
                }
                return res.status(201).json({
                    success: true,
                    message: 'El usuario se autentico correctamente',
                    data: data
                });
            }
            else {
                return res.status(401).json({// El cliente no tiene autorizacion para realizar esta peticion(401)
                    success: false,
                    message: 'El password es incorrecto'
                });
            }
        });
    },

    register(req, res) {

        const user = req.body; // CAPTURO LOS DATOS QUE ME ENVIE EL CLIENTE
        User.create(user, (err, data) => {

            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del usuario',
                    error: err
                });
            }

            return res.status(201).json({
                success: true,
                message: 'El registro se realizo correctamente',
                data: data // EL ID DEL NUEVO USUARIO QUE SE REGISTRO
            });

        });

    }

}