module.exports = (app) => {
    const purchases = require('../controllers/purchase.controller.js');
    //Crea nuevo  
    app.post('/purchases', purchases.create);
    //Lista de 
    app.get('/purchases', purchases.findAll);
    //Obtener un dato mediante Id
    app.get('/purchases/:purchaseId', purchases.findOne);
    //Actualizar mediante Id
    app.put('/purchases/:purchaseId', purchases.update);
    //Eliminar mediante Id
    app.delete('/purchases/:purchaseId', purchases.delete);
}
