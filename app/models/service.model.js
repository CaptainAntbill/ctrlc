const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema({
    servicio: String,
    cliente: String, 
    direccion: String,  
    horario: String,  
    fecha: Date,
    precio: Number  
}, {
    timestamps: true
});

module.exports = mongoose.model('Service', ServiceSchema);


