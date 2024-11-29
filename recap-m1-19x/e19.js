"use strict"
let n1,n2,n3;

function esuma(n1, n2, n3) {
    
    n1=Number(prompt("Ingrese el primer numero")); 
    n2=Number(prompt("Ingrese el segundo numero")); 
    n3=Number(prompt("Ingrese el tercer numero")); 
    return n1+n2+n3;
}

let result=esuma(n1,n2,n3);
alert("La suma de los 3 numeros es "+result);