"use strict"

const calculariva = (preciosinIVA) => preciosinIVA*0.12;

const preciousuario=parseFloat(prompt("Ingrese el precio sin IVA"));

const precioIVA=calculariva(preciousuario);

alert("El IVA es:$"+precioIVA);

alert("El precio con IVA es:$"+(precioIVA+preciousuario));

