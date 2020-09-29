module.exports = (app) => {
    const services = require('../controllers/service.controller.js');
    //Crea nuevo  
    app.post('/services', services.create);
    //Lista de 
    app.get('/services', services.findAll);
    //Obtener un dato mediante Id
    app.get('/services/:serviceId', services.findOne);
    //Actualizar mediante Id
    app.put('/services/:serviceId', services.update);
    //Eliminar mediante Id
    app.delete('/services/:serviceId', services.delete);
}
