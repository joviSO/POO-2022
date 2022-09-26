import prompt from "prompt-sync"
const input = prompt();

function main(){
  let numero: number = Number(input("insira um numero aqui: "));

  console.log(ehPrimo(numero));
};
main();

function ehPrimo(num: number): boolean {
  for(let i = 2; i < num; i++)
    if(num % i == 0) {
        return false;
    };
  return num > 1;
};