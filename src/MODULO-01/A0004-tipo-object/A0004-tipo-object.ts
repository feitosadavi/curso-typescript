/* eslint-disable */

// forma mais segura de definir um objeto com typescript
const objetoA = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

/**
 * o typescript não permite a alteração da estrutura de objetos pré-definidos
 */
objetoA.chaveA = 'Outro valor'; // Consegue!!!
objetoA.chaveC = 'Nova chave'; // Não consegue!!!

// se eu quiser construir um objeto mais flexível, faço da seguinte maneira:
const objetoB: {
  readonly chaveA: string; // readonly indica que eu não posso alterar a chave
  chaveB: string;
  [key: string]: string; // desta forma eu permito a criação de novas chaves sem nome pré-definido (index signature)
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoB.chaveD = 'testeChaveD';
objetoB.chaveA = 'Outro valor'; // Não consegue alterar pois é readonly
