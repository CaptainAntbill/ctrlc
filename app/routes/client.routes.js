module.exports = (app) => {
    const clients = require('../controllers/client.controller.js');
    //Crea nuevo  
    app.post('/clients', clients.create);
    //Lista de 
    app.get('/clients', clients.findAll);
    //Obtener un dato mediante Id
    app.get('/clients/:clientId', clients.findOne);
    //Actualizar mediante Id
    app.put('/clients/:clientId', clients.update);
    //Eliminar mediante Id
    app.delete('/clients/:clientId', clients.delete);
}
