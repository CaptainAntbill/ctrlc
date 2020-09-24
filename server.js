const express = require('express');
const bodyParser = require('body-parser');

//Se crea la apliacion express
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.json({"message": "Bienvenido a la aplicacion!"});
});

app.listen(3000, () => {
    console.log("Server funcionando en puerto 3000");
});

//Configuracion y conexion de la base de datos en el servidor
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Conexion a la Base de Datos!");
}).catch(err => {
    console.log('No hay conexion a la BD ', err);
    process.exit();
});
