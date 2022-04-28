var num1 = prompt("dime el primer valor", "");
var num2 = prompt("dime el segundo valor", "");
var num3 = prompt("dime el tercer valor", "");
if (num1 == num2 == num3) {
    alert("los tres valores son el mismo")
}
else if (num1 > num2 && num1 > num3) {
    alert("el primer valor es el mayor")
} else if (num3 > num1 && num3 > num2) {
    alert("el tercer valor es el mayor")
} else if (num2 > num1 && num2 > num3) {
    alert("el segundo valor es el mayor")
}