"use strict"

let p1=Number(prompt("Conoce el usuario ingrese 0=no ingrese 1=si"));


if (p1==0) {
    alert("Acceso denegado")
} else {
    let p2=Number(prompt("Conoce la contraseña ingrese 0=no ingrese 1=si"));
    if (p2==0) {
        alert("Acceso denegado")
    } else {
        alert("Acceso concedido")
    }
}
