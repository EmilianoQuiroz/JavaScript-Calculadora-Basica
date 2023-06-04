const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password123',
    database: 'delivery_app'
});

db.connect(function (err){
    if (err) throw err;
    console.log('Base de datos conectada correctamente');
});

module.exports = db;