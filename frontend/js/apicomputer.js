//Metodo getAll
$(document).ready(function () {
    $.ajax({
        url: "http://localhost:3000/computers",
        type: "GET",
        success: function (res) {
            $.each(res, function (key, val) {
                $("#computers").append(
                    "<tr><td>" + 
                    val.modelo + 
                    "</td><td>" + 
                    val.marca +
                    "</td><td>" + 
                    val.procesador +
                    "</td><td>" + 
                    val.ram +
                    "</td><td>" + 
                    val.disco +
                    "</td><td>" + 
                    val.tarjeta + 
                    "</td>" +
                    "<td>" + 
                    val.cantidad + 
                    "</td>"+
                    "<td>" + val.precio + "</td>" +
                    "<td><button class='btn btn-warning' id='" + val._id + "' onclick='editComputer(this)'>Editar</button></td>" +
                    "<td><button class='btn btn-danger' id='" + val._id + "' onclick='deleteComputer(this)'>Eliminar</button></td>" +
                    "</tr>"

                );
            });
        },
    });
});

//Metodo para ingresar 
$('#guardar').click(function (e) {
    e.preventDefault();
    var modelo = $('#modelo').val();
    var marca = $('#marca').val();
    var procesador = $('#procesador').val();
    var ram = $('#ram').val();
    var disco = $('#disco').val();
    var tarjeta = $('#tarjeta').val();
    var cantidad = $('#cantidad').val();
    var precio = $('#precio').val();
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "http://localhost:3000/computers",
        data: {
            modelo: modelo,
            marca: marca,
            procesador: procesador,
            ram: ram,
            disco: disco,
            tarjeta: tarjeta,
            cantidad: cantidad,
            precio: precio
        },

        success: function (response) {
            window.location.href = "indexcomputer.html";
        },
    });
});

//Metodo para actualizar
function editComputer($this) {
    window.location.href = "updatecomputer.html?" + $this.id;
}

$('#actualizar').click(function (e) {
    e.preventDefault();
    var modelo_edit = $('#modelo_edit').val();
    var marca_edit = $('#marca_edit').val();
    var procesador_edit = $('#procesador_edit').val();
    var ram_edit = $('#ram_edit').val();
    var disco_edit = $('#disco_edit').val();
    var tarjeta_edit = $('#tarjeta_edit').val();
    var cantidad_edit = $('#cantidad_edit').val();
    var precio_edit = $('#precio_edit').val();
    $.ajax({
        type: "PUT",
        dataType: "json",
        url: "http://localhost:3000/computers/" + window.location.href.split('?')[1],
        data: {
            modelo: modelo_edit,
            marca: marca_edit,
            procesador: procesador_edit,
            ram: ram_edit,
            disco: disco_edit,
            tarjeta: tarjeta_edit,
            cantidad: cantidad_edit,
            precio: precio_edit
        },

        success: function (response) {
            window.location.href = "indexcomputer.html";
        },
    });
});

//Metodo para eliminar
function deleteComputer($this) {
    var res = confirm('Desea eliminar el registro?');
    if(res) {
        $.ajax({
            type: "DELETE",
            dataType: "json",
            url: "http://localhost:3000/computers/" + $this.id,
            success: function (response) {
                window.location.href = "indexcomputer.html?eliminado";
            },

        });
    }
}