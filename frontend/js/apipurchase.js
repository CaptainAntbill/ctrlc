//Metodo getAll
$(document).ready(function () {
    $.ajax({
        url: "http://localhost:3000/purchases",
        type: "GET",
        success: function (res) {
            $.each(res, function (key, val) {
                $("#purchases").append(
                    "<tr><td>" + 
                    val.pedido + 
                    "</td><td>" + 
                    val.proveedor + 
                    "</td>" +
                    "<td>" +
                    val.contacto + 
                    "</td>" +
                    "<td>" + 
                    val.cantidad + 
                    "</td>" +
                    "<td>" +  
                    val.fecha + 
                    "</td>"+
                    "<td>" + val.precio + "</td>" +
                    "<td><button class='btn btn-warning' id='" + val._id + "' onclick='editPurchase(this)'>Editar</button></td>" +
                    "<td><button class='btn btn-danger' id='" + val._id + "' onclick='deletePurchase(this)'>Eliminar</button></td>" +
                    "</tr>"

                );
            });
        },
    });
});

//Metodo para ingresar 
$('#guardar').click(function (e) {
    e.preventDefault();
    var pedido = $('#pedido').val();
    var proveedor = $('#proveedor').val();
    var contacto = $('#contacto').val();
    var cantidad = $('#cantidad').val();
    var fecha = $('#fecha').val();
    var precio = $('#precio').val();
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "http://localhost:3000/purchases",
        data: {
            pedido: pedido,
            proveedor: proveedor,
            contacto: contacto,
            cantidad: cantidad,
            fecha: fecha,
            precio: precio
        },

        success: function (response) {
            window.location.href = "indexpurchase.html";
        },
    });
});

//Metodo para actualizar
function editPurchase($this) {
    window.location.href = "updatepurchase.html?" + $this.id;
}

$('#actualizar').click(function (e) {
    e.preventDefault();
    var pedido_edit = $('#pedido_edit').val();
    var proveedor_edit = $('#proveedor_edit').val();
    var contacto_edit = $('#contacto_edit').val();
    var cantidad_edit = $('#cantidad_edit').val();
    var fecha_edit = $('#fecha_edit').val();
    var precio_edit = $('#precio_edit').val();
    $.ajax({
        type: "PUT",
        dataType: "json",
        url: "http://localhost:3000/purchases/" + window.location.href.split('?')[1],
        data: {
            pedido: pedido_edit,
            proveedor: proveedor_edit,
            contacto: contacto_edit,
            cantidad: cantidad_edit,
            fecha: fecha_edit,
            precio: precio_edit
        },

        success: function (response) {
            window.location.href = "indexpurchase.html";
        },
    });
});

//Metodo para eliminar
function deletePurchase($this) {
    var res = confirm('Desea eliminar el registro?');
    if(res) {
        $.ajax({
            type: "DELETE",
            dataType: "json",
            url: "http://localhost:3000/purchases/" + $this.id,
            success: function (response) {
                window.location.href = "indexpurchase.html?eliminado";
            },

        });
    }
}

//Validacion
$().ready(function() {
    $("#form").validate({
        rules: {
            pedido_edit: "required"
        },
        messages: {
            pedido_edit: "LLena el campo"
        }
    })
});