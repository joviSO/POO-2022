import prompt from "prompt-sync"
const input = prompt();

function main(){
  let nome: string = String(input("insira um seu nome aqui: "));
  let tratamento: string = String(input("insira o pronome de tratamento que quer que seja utilizado: "));

  if (tratamento == "" || tratamento == null){
    console.log(chamamento(nome));
  }else{
    console.log(chamamento(nome, tratamento));
  };
};
main();

function chamamento(nome: string, tratamento: string = "Sr." ): string{
  return tratamento + " " + nome;
};