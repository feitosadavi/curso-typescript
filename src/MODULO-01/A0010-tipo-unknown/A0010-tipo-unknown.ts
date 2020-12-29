/* eslint-disable */

// É o pai de todos os tipos, o que está na hierarquia mais alta
// É mais seguro usar este que o any
// Te força a fazer a checagem de tipos

let x: unknown;

x = 10;
const y = 800;

console.log(x + y); // Dá erro, pois items do tipo unknow precisam de uma verificação para serem utilizados:

if (typeof x === 'number') console.log(x + y); // Esta é a forma correta de usar unknown, pois há a verificação primeiro
