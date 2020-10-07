//Metodo getAll
$(document).ready(function () {
    $.ajax({
        url: "http://localhost:3000/clients",
        type: "GET",
        success: function (res) {
            $.each(res, function (key, val) {
                $("#clients").append(
                    "<tr><td>" + 
                    val.nombre + 
                    "</td><td>" + 
                    val.telefono + 
                    "</td>"+
                    "<td>" + val.direccion + "</td>" +
                    "<td><button class='btn btn-warning' id='" + val._id + "' onclick='editClient(this)'>Editar</button></td>" +
                    "<td><button class='btn btn-danger' id='" + val._id + "' onclick='deleteClient(this)'>Eliminar</button></td>" +
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
    var telefono = $('#telefono').val();
    var direccion = $('#direccion').val();
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "http://localhost:3000/clients",
        data: {
            nombre: nombre,
            telefono: telefono,
            direccion: direccion
        },

        success: function (response) {
            window.location.href = "indexclient.html";
        },
    });
});

//Metodo para actualizar
function editClient($this) {
    window.location.href = "updateclient.html?" + $this.id;
}

$('#actualizar').click(function (e) {
    e.preventDefault();
    var nombre_edit = $('#nombre_edit').val();
    var telefono_edit = $('#telefono_edit').val();
    var direccion_edit = $('#direccion_edit').val();
    $.ajax({
        type: "PUT",
        dataType: "json",
        url: "http://localhost:3000/clients/" + window.location.href.split('?')[1],
        data: {
            nombre: nombre_edit,
            telefono: telefono_edit,
            direccion: direccion_edit
        },

        success: function (response) {
            window.location.href = "indexclient.html";
        },
    });
});

//Metodo para eliminar
function deleteClient($this) {
    var res = confirm('Desea eliminar el registro?');
    if(res) {
        $.ajax({
            type: "DELETE",
            dataType: "json",
            url: "http://localhost:3000/clients/" + $this.id,
            success: function (response) {
                window.location.href = "indexclient.html?eliminado";
            },

        });
    }
}

/*/Busca
var options = {
    valueNames: [
        'name'
    ]
};

var userList = new List('buscar', options)**/