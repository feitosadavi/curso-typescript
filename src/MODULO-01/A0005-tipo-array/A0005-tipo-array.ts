/* eslint-disable */

//Posso fazer: Array<T> ou T[]
// *T significa: tipo

// exemplo simples
function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((a, b) => a * b); // o 1 significa que iniciaremos com 1
}

console.log(multiplicaArgs(1, 2, 3));
