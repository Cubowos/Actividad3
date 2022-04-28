var name = prompt("cual es tu nombre");
var age = prompt("cual es tu edad");
if (name == "Mario" || name == "Carlos") {
    alert("Ingresa a VIP")
}
else if (age < 18) {
    alert("No puede ingresar a la discoteca")
}
else if (age >= 18) {
    alert("Puede ingresar a la discoteca")

}