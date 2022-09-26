function main(){
  const numeros: number[] = [14, 23, 3, 4, 51, 31];
  
  console.log(formataArray(numeros));
} 
main();

function formataArray(numeros: number[]): string{
  let lista = '';

  numeros.forEach(function(numero: number, i: number): void{
      if(i != (numeros.length-1)){
       lista += numero + "-";
      }else{
        lista += numero;
      }
  })

  return lista;
}
