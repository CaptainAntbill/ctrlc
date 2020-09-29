const Service = require('../models/service.model.js');

//Crear y guardar nuevo registro
exports.create = (req, res) => {
    if(!req.body.servicio && !req.body.cliente && !req.body.direccion && !req.body.horario 
        && !req.body.fecha && !req.body.precio) {
        return res.status(400).send({
            message: "Los datos no pueden estar vacios"
    });
}
    //Nuevo
    const service = new Service({
        servicio: req.body.servicio || "Cualquier servicio",
        cliente: req.body.cliente,
        direccion: req.body.direccion,
        horario: req.body.horario,
        fecha: req.body.fecha,
        precio: req.body.precio
    });

    //Registro Guardado
    service.save()
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
    Service.find()
    .then(services => {
        res.send(services);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error al crear nuevo registro"
        })
    })
};

//Encontrar un solo registro
exports.findOne = (req, res) => {
    Service.findById(req.params.serviceId)
    .then(service => {
        if(!service) {
            return res.status(404).send({
                message: "Registro no encontrado id " + req.params.serviceId
            });
        }
        res.send(service);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Registro no encontrado id " + req.params.serviceId
            });
        }
        return res.status(500).send({
            message: "Error al obtener el dato id " + req.params.serviceId
        });
    });
};

//Actualizar un registro
exports.update = (req, res) => {
    if(!req.body.servicio && !req.body.cliente && !req.body.direccion && !req.body.horario 
        && !req.body.fecha && !req.body.precio) {
        return res.status(400).send({
            message: "Los servicios no pueden estar vacios"
    });

    }

    Service.findByIdAndUpdate(req.params.serviceId, {
        servicio: req.body.servicio || "Cualquier servicio",
        cliente: req.body.cliente,
        direccion: req.body.direccion,
        horario: req.body.horario,
        fecha: req.body.fecha,
        precio: req.body.precio
    }, {new: true})
    .then(service => {
        if(!service) {
            return res.status(404).send({
                message: "Registro no encontrado " + req.service.serviceId
            });
        }
        res.send(service);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "No encontrado registro " + req.params.serviceId
            });
        }
        return res.status(500).send({
            message: "Error al actualizar registro " + req.params.serviceId
        });
    });
};

//Eliminar un registro
exports.delete = (req, res) => {
    Service.findByIdAndRemove(req.params.serviceId)
    .then(service => {
        if(!service) {
            return res.status(404).send({
                message: "Registro no encontrado " + req.params.serviceId
            });
        }
        res.send({message: "Registro eliminado correctamente!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'No Encontrado') {
            return res.status(404).send({
                message: "Registro no encontrado " + req.params.serviceId
            });
        }
        return res.status(500).send({
            message: "No se elimino el registro " + req.params.serviceId
        });
    });
};
