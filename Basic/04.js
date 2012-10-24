/*
* Swicht Statements
*/

window.onload = init;

function init() {
    switch (navigator.platform) {
        case "Win32":
            alert("Windows");
            break;

        case "MacPPC":
            alert("Mac Power PC ");
            break;

        case "MacIntel":
        
        case "X11":
            alert("Mac Intel-Based");
            break;

        default:
            alert(navigator.platform);
    }
}
