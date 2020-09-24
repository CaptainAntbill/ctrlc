const Computer = require('../models/computer.model.js');

//Crear y guardar nuevo registro
exports.create = (req, res) => {
    if(!req.body.modelo && !req.body.marca && !req.body.procesador && !req.body.ram
        && !req.body.disco && !req.body.tarjeta && !req.body.cantidad && !req.body.precio ) {
        return res.status(400).send({
            message: "Los datos no pueden estar vacios"
    });
}
    //Nuevo
    const computer = new Computer({
        modelo: req.body.modelo || "Cualquier Nombre",
        marca: req.body.marca,
        procesador: req.body.procesador,
        ram: req.body.ram,
        disco: req.body.disco,
        tarjeta: req.body.tarjeta,
        cantidad: req.body.cantidad,
        precio: req.body.precio
    });

    //Registro Guardado
    computer.save()
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
    Computer.find()
    .then(computers => {
        res.send(computers);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error al crear nuevo registro"
        })
    })
};

//Encontrar un solo registro
exports.findOne = (req, res) => {
    Computer.findById(req.params.computerId)
    .then(computer => {
        if(!computer) {
            return res.status(404).send({
                message: "Registro no encontrado id " + req.params.computerId
            });
        }
        res.send(computer);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Registro no encontrado id " + req.params.computerId
            });
        }
        return res.status(500).send({
            message: "Error al obtener el dato id " + req.params.computerId
        });
    });
};

//Actualizar un registro
exports.update = (req, res) => {
    if(!req.body.modelo && !req.body.marca && !req.body.procesador && !req.body.ram
        && !req.body.disco && !req.body.tarjeta && !req.body.cantidad && !req.body.precio ) {
        return res.status(400).send({
            message: "Los nombres no pueden estar vacios"
    });

    }

    Computer.findByIdAndUpdate(req.params.computerId, {
        modelo: req.body.modelo || "Cualquier Nombre",
        marca: req.body.marca,
        procesador: req.body.procesador,
        ram: req.body.ram,
        disco: req.body.disco,
        tarjeta: req.body.tarjeta,
        cantidad: req.body.cantidad,
        precio: req.body.precio
    }, {new: true})
    .then(computer => {
        if(!computer) {
            return res.status(404).send({
                message: "Registro no encontrado " + req.computer.computerId
            });
        }
        res.send(computer);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "No encontrado registro " + req.params.computerId
            });
        }
        return res.status(500).send({
            message: "Error al actualizar registro " + req.params.computerId
        });
    });
};

//Eliminar un registro
exports.delete = (req, res) => {
    Computer.findByIdAndRemove(req.params.computerId)
    .then(computer => {
        if(!computer) {
            return res.status(404).send({
                message: "Registro no encontrado " + req.params.computerId
            });
        }
        res.send({message: "Registro eliminado correctamente!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'No Encontrado') {
            return res.status(404).send({
                message: "Registro no encontrado " + req.params.computerId
            });
        }
        return res.status(500).send({
            message: "No se elimino el registro " + req.params.computerId
        });
    });
};
