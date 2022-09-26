console.log(soma(1, 2)); //2

console.log(soma(1, "2")); // "12"

console.log(soma(1)); // undefined

function soma(x: number, y?: any): number {
  return x + y;
}
  