const mongoose = require('mongoose');

const PurchaseSchema = mongoose.Schema({
    pedido: String,
    precio: Number,  
    fecha: Date, 
    proveedor: String,  
    cantidad: Number,
    contacto: String  
}, {
    timestamps: true
});

module.exports = mongoose.model('Purchase', PurchaseSchema);


