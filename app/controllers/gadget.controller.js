const Gadget = require('../models/gadget.model.js');

//Crear y guardar nuevo registro
exports.create = (req, res) => {
    if(!req.body.nombre && !req.body.marca && !req.body.cantidad && !req.body.precio ) {
        return res.status(400).send({
            message: "Los datos no pueden estar vacios"
    });
}
    //Nuevo
    const gadget = new Gadget({
        nombre: req.body.nombre || "Cualquier Nombre",
        marca: req.body.marca,
        cantidad: req.body.cantidad,
        precio: req.body.precio
    });

    //Registro Guardado
    gadget.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error al crear nuevo registro"
        });
    });
};

//Muestra todos los datos de la base de datos
exports.findAll = (req, res) => {
    Gadget.find()
    .then(gadgets => {
        res.send(gadgets);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error al crear nuevo registro"
        })
    })
};

//Encontrar un solo registro
exports.findOne = (req, res) => {
    Gadget.findById(req.params.gadgetId)
    .then(gadget => {
        if(!gadget) {
            return res.status(404).send({
                message: "Registro no encontrado id " + req.params.gadgetId
            });
        }
        res.send(gadget);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Registro no encontrado id " + req.params.gadgetId
            });
        }
        return res.status(500).send({
            message: "Error al obtener el dato id " + req.params.gadgetId
        });
    });
};

//Actualizar un registro
exports.update = (req, res) => {
    if(!req.body.nombre && !req.body.marca && !req.body.cantidad && !req.body.precio ) {
        return res.status(400).send({
            message: "Los nombres no pueden estar vacios"
    });

    }

    Gadget.findByIdAndUpdate(req.params.gadgetId, {
        nombre: req.body.nombre || "Cualquier Nombre",
        marca: req.body.marca,
        cantidad: req.body.cantidad,
        precio: req.body.precio
    }, {new: true})
    .then(gadget => {
        if(!gadget) {
            return res.status(404).send({
                message: "Registro no encontrado " + req.gadget.gadgetId
            });
        }
        res.send(gadget);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "No encontrado registro " + req.params.gadgetId
            });
        }
        return res.status(500).send({
            message: "Error al actualizar registro " + req.params.gadgetId
        });
    });
};

//Eliminar un registro
exports.delete = (req, res) => {
    Gadget.findByIdAndRemove(req.params.gadgetId)
    .then(gadget => {
        if(!gadget) {
            return res.status(404).send({
                message: "Registro no encontrado " + req.params.gadgetId
            });
        }
        res.send({message: "Registro eliminado correctamente!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'No Encontrado') {
            return res.status(404).send({
                message: "Registro no encontrado " + req.params.gadgetId
            });
        }
        return res.status(500).send({
            message: "No se elimino el registro " + req.params.gadgetId
        });
    });
};
