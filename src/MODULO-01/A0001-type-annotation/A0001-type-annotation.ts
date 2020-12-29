/* eslint-disable */

// SE O O TYPESCRIPT INFERIR UM TIPO "N", ENTÃO QUER DIZER QUE VOCÊ DEVERÁ FAZER A TIPAGEM ESTÁTICA

/*
  TIPOS MAIS BÁSICOS

   string -> 'Davi',
   number -> 17,
   boolean -> TRUE,
   symbol -> Symbol('qualquer-symbol'),
   big -> usado para bigint

   *numbers em javascript aceitam hexadecimal, decimal, binário
*/

let errado: string = 'Luiz'; // Errado, pois é redundante
let certo = 'Luiz'; // Correto, pois o typescript tbm pode usar tipagem dinâmica

// Arrays
// no caso dos arrays, precimos especificar o tipo do array, veja abaixo:
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3]; // Podemos declarar desta forma também

let arraydeStrings: Array<string> = ['davi', 'amanda', 'carlos'];
let arraydeStrings2: string[] = ['davi', 'amanda', 'carlos']; // Podemos declarar desta forma também

// Objetos
// a interrogação (?) indica que o atributo do objeto é opcional
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Davi',
  idade: 17,
  //adulto: false,
};

// Funções
function soma(x: number, y: number) {
  // para tipar função, basta adicionar um : number na frente dos parêntesis
  // infere que o retorno da função é um number
  return x + y;
}
const result = soma(2, 2); // também infere que o tipo da variável será number devido ao retorno da função

const soma2: (x: number, y: number) => number = (x, y) => x + y;
//EXPLICAÇÃO: const soma2: (x: number, y: number) => number /* indica o tipo da função */ = /*a função só começará a ser construída a partir daqui*/ (x, y) => x + y;
