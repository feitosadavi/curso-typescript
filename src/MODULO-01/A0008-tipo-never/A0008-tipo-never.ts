/* eslint-disable */

// quero indicar que a função NUNCA irá retornar algo
function criaErro(): never {
  throw new Error('Erro qualuqer');
}

criaErro();
