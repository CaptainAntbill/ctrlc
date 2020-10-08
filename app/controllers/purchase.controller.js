const Purchase = require('../models/purchase.model.js');

//Crear y guardar nuevo registro
exports.create = (req, res) => {
    if(!req.body.pedido && !req.body.precio && !req.body.fecha && !req.body.proveedor && !req.body.cantidad && !req.body.contacto ) {
        return res.status(400).send({
            message: "Los datos no pueden estar vacios"
    });
}
    //Nuevo
    const purchase = new Purchase({
        pedido: req.body.pedido || "Cualquier pedido",
        precio: req.body.precio,
        fecha: req.body.fecha,
        proveedor: req.body.proveedor,
        cantidad: req.body.cantidad,
        contacto: req.body.contacto
    });

    //Registro Guardado
    purchase.save()
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
    Purchase.find()
    .then(purchases => {
        res.send(purchases);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error al crear nuevo registro"
        })
    })
};

//Encontrar un solo registro
exports.findOne = (req, res) => {
    Purchase.findById(req.params.purchaseId)
    .then(purchase => {
        if(!purchase) {
            return res.status(404).send({
                message: "Registro no encontrado id " + req.params.purchaseId
            });
        }
        res.send(purchase);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Registro no encontrado id " + req.params.purchaseId
            });
        }
        return res.status(500).send({
            message: "Error al obtener el dato id " + req.params.purchaseId
        });
    });
};

//Actualizar un registro
exports.update = (req, res) => {
    if(!req.body.pedido && !req.body.precio && !req.body.fecha && !req.body.proveedor && !req.body.cantidad && !req.body.contacto) {
        return res.status(400).send({
            message: "Los pedidos no pueden estar vacios"
    });

    }

    Purchase.findByIdAndUpdate(req.params.purchaseId, {
        pedido: req.body.pedido || "Cualquier pedido",
        precio: req.body.precio,
        fecha: req.body.fecha,
        proveedor: req.body.proveedor,
        cantidad: req.body.cantidad,
        contacto: req.body.contacto
    }, {new: true})
    .then(purchase => {
        if(!purchase) {
            return res.status(404).send({
                message: "Registro no encontrado " + req.purchase.purchaseId
            });
        }
        res.send(purchase);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "No encontrado registro " + req.params.purchaseId
            });
        }
        return res.status(500).send({
            message: "Error al actualizar registro " + req.params.purchaseId
        });
    });
};

//Eliminar un registro
exports.delete = (req, res) => {
    Purchase.findByIdAndRemove(req.params.purchaseId)
    .then(purchase => {
        if(!purchase) {
            return res.status(404).send({
                message: "Registro no encontrado " + req.params.purchaseId
            });
        }
        res.send({message: "Registro eliminado correctamente!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'No Encontrado') {
            return res.status(404).send({
                message: "Registro no encontrado " + req.params.purchaseId
            });
        }
        return res.status(500).send({
            message: "No se elimino el registro " + req.params.purchaseId
        });
    });
};
