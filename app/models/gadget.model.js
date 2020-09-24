const mongoose = require('mongoose');

const GadgetSchema = mongoose.Schema({
    nombre: String,
    marca: String, 
    cantidad: String, 
    precio: Number, 
}, {
    timestamps: true
});

module.exports = mongoose.model('Gadget', GadgetSchema);


