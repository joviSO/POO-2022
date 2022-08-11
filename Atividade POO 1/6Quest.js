/*let valores = [2, 4, 6, 8, 10, 12, 14, 16, -1];
let i = 0;
let valor = valores[i];
let soma = 0;
while(valor > 0 ){

  soma += valores[i];
  i++;
  valor = valores[i];

}

console.log(soma, soma/(valores.length - 1));*/

let valores = [2, 4, 6, 8, 10, 12, 14, 16];
let soma = 0;

valores.map(valor => soma += valor);

console.log("soma " + soma, "\nmedia aritmetica " + soma/valores.length);

