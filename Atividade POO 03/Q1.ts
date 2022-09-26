import prompt from "prompt-sync"
const input = prompt();

function main(){
  let numero: number = Number(input("insira um numero aqui: "));

  console.log(par(numero));
};
main();

function par(numero: number): boolean{
  if (numero % 2 == 0) {
    return true;
  }else{
    return false;
  };
};