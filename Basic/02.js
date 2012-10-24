//// IF-Else 
//if (navigator.cookieEnabled) {
//    // Mensaje de alerta
//    alert("El navegador soporta Cookies!");
//} else {
//    // Mensaje de alerta
//    alert("El navegador no soporta Cookies!");
//}


//// Mensajes de confirmacion
//if (confirm("¿Desea continuar?")) {
//    alert("Ha pulsado SI");
//} else {
//    alert("Ha pulsado NO");
//}


// Solicitar informacion
var cont = prompt("Desea Continuar??", "");

if (cont) {
    alert("Has dicho " + cont);
} else {
    alert("No has contestado");
}