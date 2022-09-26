"use strict";
function main() {
    const numeros = [14, 23, 3, 4, 51, 31];
    console.log(formataArray(numeros));
}
main();
function formataArray(numeros) {
    let lista = '';
    numeros.forEach(function (numero, i) {
        if (i != (numeros.length - 1)) {
            lista += numero + "-";
        }
        else {
            lista += numero;
        }
    });
    return lista;
}
