/*
*  Funciones
*/


// Cuando se cargue la ventana
window.onload = init;

// Definicion de la funcion INIT
function init() {
    // Asociamos un manejador de eventos para el click del enlace
    document.getElementById("redirect").onclick = clickHandler;
}

//// Si habilitamos JavaScript nos redireccionara a 02.html, sino veremos 01.html
//function clickHandler() {
//    window.location = "02.html";
//    // Cancelamos el enlace
//    return false;
//}

// Si en enlace nos lleva a otro dominio mostramos un mensaje de advertencia
function clickHandler() {
    if (this.toString().indexOf("estcab") < 0) {
        alert("Estas habandonando el sitio.");
    }
}