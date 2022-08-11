function calcularJurosCompostos(v, t){
  let valores = [];
  let com_juros = v;

  for(let i = 1; i <= 12; i++){
    com_juros += com_juros*t/100;
    valores.push(com_juros.toFixed(2));
  }
  return valores;

}
console.log(calcularJurosCompostos(1000, 1));

let valorInicial = 1000
let juros = 1



