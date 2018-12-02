var mesaReservar;
var modalInstances;

/*
 * Instancias de materialize
 */
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    modalInstances = M.Modal.init(elems);
});


/**
 * Prepara el proceso de reserva para la mesa indicada
 * @param {*} idMesa 
 */
function prepararReserva(idMesa) {
    mesaReservar = idMesa;
}

/**
 * Genera una reserva de una mesa utilizando "mesaReservar" y los datos del modal
 */
function reservar(event) {
    var comensales = document.getElementById('comensales').value;
    if (comensales < 1 || comensales > 4) {
        M.toast({ html: 'Por favor, especifica de 1 a 4 comensales por mesa.' })
        return false;
    } 

    // Cerramos el modal de reservas (el 1o)
    modalInstances[0].close();

    // Reservamos la mesa
    reservarMesa(mesaReservar, comensales);

    // Mostramos el modal informativo
    M.toast({ html: 'Mesa ' + mesaReservar + ' reservada' })
    return true;
}


/**
 * Reserva una mesa especifica
 *
 * @param {number} idMesa Mesa a reservar
 * @param {number} comensales Cantidad de comensales
 */
function reservarMesa(idMesa, comensales) {
    var idMesa = "mesa-" + idMesa;
    var mesa = document.querySelector("#" + idMesa);
    
    // Asignamos la cantidad de comensales
    mesa.querySelector(".comensales").innerHTML = comensales.toString();

    // Cambiamos el estado de la mesa
    toggleClass(mesa, "disponible", "ocupada");
}

/**
 * Cancela la reserva de una mesa
 *
 * @param {number} idMesa Mesa a reservar
 */
function cancelarMesa(idMesa) {
    var idMesa = "mesa-" + idMesa;
    var mesa = document.querySelector("#" + idMesa);
    
    // Asignamos la cantidad de comensales
    mesa.querySelector(".comensales").innerHTML = comensales.toString();

    // Cambiamos el estado de la mesa
    toggleClass(mesa, "ocupada", "disponible");
}


function toggleClass(element, classOld, classNew) {
    element.classList.remove(classOld);
    element.classList.add(classNew);
}