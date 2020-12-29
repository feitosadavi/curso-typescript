/* eslint-disable */

// retorna ou body ou null
const body = document.querySelector('body');
body.style.background = 'red'; // body pode ser nulo

// posso fazer
if (body) body.style.background = 'red'; // mas isso não é asserção

// Non-null assertion (!)
// nesta assertion, eu utilizo a exclamação para indicar que é certeza que o body existe
const body2 = document.querySelector('body')!; // não é recomendado, mas é um tipo de assertion
body2.style.background = 'red';

// não posso fazer assertions para qualquer tipo, apenas subtipos
const body4 = document.querySelector('body') as number; // dá erro pois não é possível converter um htmlelement para number

// se eu quisesse fazer um conversão de tipos, poderia fazer da seguinte maneira
const body5 = (document.querySelector('body') as unknown) as number; // desta forma consigo converter htmlelement para number

/**
 * RECOMENDADO
 */

// Type assertion
// Só posso fazer estas assertions se eu tiver certeza
const body3 = document.querySelector('body') as HTMLBodyElement; // assertion recomendada
body3.style.background = 'red';

//HTMLElement
// eu posso fazer assertions para elementos que o typescript não consegue fazer inferências
// no exemplo abaixo, eu chamo uma classe input pelo query selector, mas o typescript não sabe que se trata de um elemento input
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
