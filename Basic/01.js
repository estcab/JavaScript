// Cuando la ventana se cargue ejecutamos la funcion 'Saludo'
window.onload = Saludo;

/*
 * Recuperamos el elemento con id = msg y cambiamos su HTML interno
 */
function Saludo() {
    document.getElementById("msg").innerHTML = 
        "Hola Mundo desde un archivo Javascript externo";
}