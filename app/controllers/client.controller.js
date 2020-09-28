const Client = require('../models/client.model.js');

//Crear y guardar nuevo registro
exports.create = (req, res) => {
    if(!req.body.nombre && !req.body.telefono && !req.body.direccion ) {
        return res.status(400).send({
            message: "Los datos no pueden estar vacios"
    });
}
    //Nuevo
    const client = new Client({
        nombre: req.body.nombre || "Cualquier Nombre",
        telefono: req.body.telefono,
        direccion: req.body.direccion
    });

    //Registro Guardado
    client.save()
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
    Client.find()
    .then(clients => {
        res.send(clients);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error al crear nuevo registro"
        })
    })
};

//Encontrar un solo registro
exports.findOne = (req, res) => {
    Client.findById(req.params.clientId)
    .then(client => {
        if(!client) {
            return res.status(404).send({
                message: "Registro no encontrado id " + req.params.clientId
            });
        }
        res.send(client);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Registro no encontrado id " + req.params.clientId
            });
        }
        return res.status(500).send({
            message: "Error al obtener el dato id " + req.params.clientId
        });
    });
};

//Actualizar un registro
exports.update = (req, res) => {
    if(!req.body.nombre && !req.body.telefono && !req.body.direccion ) {
        return res.status(400).send({
            message: "Los nombres no pueden estar vacios"
    });

    }

    Client.findByIdAndUpdate(req.params.clientId, {
        nombre: req.body.nombre || "Cualquier Nombre",
        telefono: req.body.telefono,
        direccion: req.body.direccion
    }, {new: true})
    .then(client => {
        if(!client) {
            return res.status(404).send({
                message: "Registro no encontrado " + req.client.clientId
            });
        }
        res.send(client);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "No encontrado registro " + req.params.clientId
            });
        }
        return res.status(500).send({
            message: "Error al actualizar registro " + req.params.clientId
        });
    });
};

//Eliminar un registro
exports.delete = (req, res) => {
    Client.findByIdAndRemove(req.params.clientId)
    .then(client => {
        if(!client) {
            return res.status(404).send({
                message: "Registro no encontrado " + req.params.clientId
            });
        }
        res.send({message: "Registro eliminado correctamente!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'No Encontrado') {
            return res.status(404).send({
                message: "Registro no encontrado " + req.params.clientId
            });
        }
        return res.status(500).send({
            message: "No se elimino el registro " + req.params.clientId
        });
    });
};
