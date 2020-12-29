/* eslint-disable */

// não existe enum no javascript, apenas no typescript
// enum é um tipo de dados para enumarar um sequeência de opções disponíveis

enum Cores { // Uso letra maiúscula para indicar que o enum foi criado por mim
  VERMELHO, //0
  AZUL, //1
  AMARELO, //2
}

console.log(Cores);
console.log(Cores.VERMELHO); // retorna o "código" cor
console.log(Cores[1]); // consegue acessar pelo código, retornando a cor

// Desta forma, eu posso alterar as chaves do enum
enum Cores2 {
  VERMELHO = 10, // 10
  AZUL = 100, // 100
  AMARELO = 200, //200
  ROXO = 'ROXO', // posso usar a chave que eu quiser
  // no próximo item,  terei que usar um inicializador, pois o typescript não sabe como continuar a sequência após uma chave string:
  VERDE = 201,
  ROSA, // o rosa consegue continuar, pois a chave acima é um number
}

// Eu posso definir dois enums com mesmo nome, que eles irão se juntar:
enum Jogos {
  FIFA = 'ruim',
  PES = 'mtruim',
}
enum Jogos {
  Gow = 'excelente',
  Zelda = 'incrivel',
}

// Da forma acima, os dois enums irão se juntar
