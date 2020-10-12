//Metodo getAll
$(document).ready(function () {
    $.ajax({
        url: "http://localhost:3000/gadgets",
        type: "GET",
        success: function (res) {
            $.each(res, function (key, val) {
                $("#gadgets").append(
                    "<tr><td>" + 
                    val.nombre + 
                    "</td><td>" + 
                    val.marca + 
                    "</td>" +
                    "<td>" + 
                    val.cantidad + 
                    "</td>"+
                    "<td>" + val.precio + "</td>" +
                    "<td><button class='btn btn-warning' id='" + val._id + "' onclick='editGadget(this)'>Editar</button></td>" +
                    "<td><button class='btn btn-danger' id='" + val._id + "' onclick='deleteGadget(this)'>Eliminar</button></td>" +
                    "</tr>"

                );
            });
        },
    });
});

//Metodo para ingresar 
$('#guardar').click(function (e) {
    e.preventDefault();
    var nombre = $('#nombre').val();
    var marca = $('#marca').val();
    var cantidad = $('#cantidad').val();
    var precio = $('#precio').val();
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "http://localhost:3000/gadgets",
        data: {
            nombre: nombre,
            marca: marca,
            cantidad: cantidad,
            precio: precio
        },

        success: function (response) {
            window.location.href = "indexgadget.html";
        },
    });
});

//Metodo para actualizar
function editGadget($this) {
    window.location.href = "updategadget.html?" + $this.id;
}

$('#actualizar').click(function (e) {
    e.preventDefault();
    var nombre_edit = $('#nombre_edit').val();
    var marca_edit = $('#marca_edit').val();
    var cantidad_edit = $('#cantidad_edit').val();
    var precio_edit = $('#precio_edit').val();
    $.ajax({
        type: "PUT",
        dataType: "json",
        url: "http://localhost:3000/gadgets/" + window.location.href.split('?')[1],
        data: {
            nombre: nombre_edit,
            marca: marca_edit,
            cantidad: cantidad_edit,
            precio: precio_edit
        },

        success: function (response) {
            window.location.href = "indexgadget.html";
        },
    });
});

//Metodo para eliminar
function deleteGadget($this) {
    var res = confirm('Desea eliminar el registro?');
    if(res) {
        $.ajax({
            type: "DELETE",
            dataType: "json",
            url: "http://localhost:3000/gadgets/" + $this.id,
            success: function (response) {
                window.location.href = "indexgadget.html?eliminado";
            },

        });
    }
}

//Metodo getAll
$(document).ready(function () {
    $.ajax({
        url: "http://localhost:3000/gadgets",
        type: "GET",
        success: function (res) {
            $.each(res, function (key, val) {
                $("#infgadgets").append(
                    "<tr><td>" + 
                    val.nombre + 
                    "</td>" + 
                    "<td>" + val.precio + "</td>" +
                    "</tr>"

                );
            });
        },
    });
});