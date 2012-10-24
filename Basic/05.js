/*
*  try-catch
*/

window.onload = init;

function init() {

    // Creamos una variable y pedimos un numero al usuario
    var res = prompt("Introduce un numero:", "");


    try {
        if (!res || isNaN(res) || res < 0) {
            throw new Error("Numero no valido.");
        }
        alert("La raiz cuadrada de " + res + " es " + Math.sqrt(res));

    } catch (e) {
        alert(e.message);
    }
}
