module.exports = (app) => {
    const computers = require('../controllers/computer.controller.js');
    //Crea nuevo  computador
    app.post('/computers', computers.create);
    //Lista de computadores
    app.get('/computers', computers.findAll);
    //Obtener un dato mediante Id
    app.get('/computers/:computerId', computers.findOne);
    //Actualizar mediante Id
    app.put('/computers/:computerId', computers.update);
    //Eliminar mediante Id
    app.delete('/computers/:computerId', computers.delete);
}