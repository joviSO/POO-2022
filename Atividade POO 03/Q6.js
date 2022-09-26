"use strict";
function main() {
    console.log(exibir(15, "carta", true, undefined, "demasia"));
}
;
main();
function exibir(...variaveis) {
    return variaveis;
}
;
