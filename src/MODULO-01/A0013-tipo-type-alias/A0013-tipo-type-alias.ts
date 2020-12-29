/* eslint-disable */

// CTRL + l seleciona uma linha inteira

// Com o type, posso definir um tipo customizado

// Com o typescript eu posso usar tipos que serão definidos de forma posterior no código

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type corPreferida = CorRGB | CorCMYK; // Isto seria um Union Type. Eu estou unindo os tipos acima, eu um só. Então a cor preferida poderá ter as opções dos dois

type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: corPreferida;
};
const pessoa: Pessoa = {
  // faço com que o meu objeto siga a estrutura do tipo que eu defini
  nome: 'Davi',
  idade: 17,
  salario: 200_000, // posso separar as casas com underline em typescript e Python
  corPreferida: 'Vermelho',
};

console.log(pessoa);

//Module mode
export default pessoa;
