const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    nombre: String,
    telefono: String, 
    direccion: String  
}, {
    timestamps: true
});

module.exports = mongoose.model('Client', ClientSchema);


