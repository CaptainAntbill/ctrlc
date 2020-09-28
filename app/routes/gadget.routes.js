module.exports = (app) => {
    const gadgets = require('../controllers/gadget.controller.js');
    //Crea nuevo  gadget
    app.post('/gadgets', gadgets.create);
    //Lista de gadget
    app.get('/gadgets', gadgets.findAll);
    //Obtener un dato mediante Id
    app.get('/gadgets/:gadgetId', gadgets.findOne);
    //Actualizar mediante Id
    app.put('/gadgets/:gadgetId', gadgets.update);
    //Eliminar mediante Id
    app.delete('/gadgets/:gadgetId', gadgets.delete);
}
