const Category = require('../models/category');

module.exports = {
    create(req, res) {
        const category = req.body;

        Category.create(category, (err, id) => {
            
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del usuario',
                    error: err
                });
            }

            return res.status(201).json({
                success: true,
                message: 'La categoria se creo correctamente',
                data: `${id}` // ID de la nueva categoria creada
            });
        })
    }
}