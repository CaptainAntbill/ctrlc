//Metodo getAll
$(document).ready(function () {
    $.ajax({
        url: "http://localhost:3000/services",
        type: "GET",
        success: function (res) {
            $.each(res, function (key, val) {
                $("#services").append(
                    "<tr><td>" + 
                    val.servicio + 
                    "</td><td>" + 
                    val.cliente + 
                    "</td>" +
                    "<td>" + 
                    val.direccion + 
                    "</td>" +
                    "<td>" + 
                    val.horario + 
                    "</td>" +
                    "<td>" + 
                    val.fecha + 
                    "</td>"+
                    "<td>" + val.precio + "</td>" +
                    "<td><button class='btn btn-warning' id='" + val._id + "' onclick='editService(this)'>Editar</button></td>" +
                    "<td><button class='btn btn-danger' id='" + val._id + "' onclick='deleteService(this)'>Eliminar</button></td>" +
                    "</tr>"

                );
            });
        },
    });
});

//Metodo para ingresar 
$('#guardar').click(function (e) {
    e.preventDefault();
    var servicio = $('#servicio').val();
    var cliente = $('#cliente').val();
    var direccion = $('#direccion').val();
    var horario = $('#horario').val();
    var fecha = $('#fecha').val();
    var precio = $('#precio').val();
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "http://localhost:3000/services",
        data: {
            servicio: servicio,
            cliente: cliente,
            direccion: direccion,
            horario: horario,
            fecha: fecha,
            precio: precio
        },

        success: function (response) {
            window.location.href = "indexservice.html";
        },
    });
});

//Metodo para actualizar
function editService($this) {
    window.location.href = "updateservice.html?" + $this.id;
}

$('#actualizar').click(function (e) {
    e.preventDefault();
    var servicio_edit = $('#servicio_edit').val();
    var cliente_edit = $('#cliente_edit').val();
    var direccion_edit = $('#direccion_edit').val();
    var horario_edit = $('#horario_edit').val();
    var fecha_edit = $('#fecha_edit').val();
    var precio_edit = $('#precio_edit').val();
    $.ajax({
        type: "PUT",
        dataType: "json",
        url: "http://localhost:3000/services/" + window.location.href.split('?')[1],
        data: {
            servicio: servicio_edit,
            cliente: cliente_edit,
            direccion: direccion_edit,
            horario: horario_edit,
            fecha: fecha_edit,
            precio: precio_edit
        },

        success: function (response) {
            window.location.href = "indexservice.html";
        },
    });
});

//Metodo para eliminar
function deleteService($this) {
    var res = confirm('Desea eliminar el registro?');
    if(res) {
        $.ajax({
            type: "DELETE",
            dataType: "json",
            url: "http://localhost:3000/services/" + $this.id,
            success: function (response) {
                window.location.href = "indexservice.html?eliminado";
            },

        });
    }
}

//Metodo servicios
$(document).ready(function () {
    $.ajax({
        url: "http://localhost:3000/services",
        type: "GET",
        success: function (res) {
            $.each(res, function (key, val) {
                $("#iservices").append(
                    "<tr><td>" + 
                    val.servicio + 
                    "</td><td>" + 
                    "</tr>"

                );
            });
        },
    });
});