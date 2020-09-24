const mongoose = require('mongoose');

const ComputerSchema = mongoose.Schema({
    modelo: String,
    marca: String, 
    procesador: String, 
    ram: String, 
    disco: String, 
    tarjeta: String, 
    cantidad: String, 
    precio: Number, 
}, {
    timestamps: true
});

module.exports = mongoose.model('Computer', ComputerSchema);


