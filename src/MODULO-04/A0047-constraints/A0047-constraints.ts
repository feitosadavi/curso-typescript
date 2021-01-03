// No exemplo abaixo, eu quero retornar um atributo de um objeto com base em sua key
type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];
// o extends você pode ler como "no máximo". Então, leia: K pode ser no máximo chave de O

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

export const pessoa = {
  nome: 'Davi',
  sobrenome: 'Feitosa',
};
console.log(obterChave(pessoa, 'sobrenome'));
