const express = require('express');
const bodyParser = require('body-parser');
var cors = require("cors");
//Se crea la apliacion express
const app = express();
//headers
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.json({"message": "Bienvenido a la aplicacion!"});
});

//Definiendo rutas en servidor
require('./app/routes/computer.routes.js') (app);
require('./app/routes/gadget.routes.js') (app);
require('./app/routes/client.routes.js') (app);

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
