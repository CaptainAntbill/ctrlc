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