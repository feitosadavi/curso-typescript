// com o decorator podemos decorar uma classe e alterá-la sem alterar a classe original
// Uma classe anônima é uma classe que não tem nome, assim como funções anônimas
// Um decorator é um objeto que finge ser seu objeto real. Podendo ler, editar, e exluir elementos do seu objeot

@decorator // desta forma eu chamo o decorator, simples assim
export class Animal {
  constructor(public nome: string, public cor: string) {}
}
// desta forma eu estou tipando o construtor da classe
// para tipar o construtor, é só colocar um new antes de () =>
// dentro do construtor eu indico que eu posso colocar qualquer tipo de argumento
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  // função decoradora
  return class extends target {
    // target é a classe que recebemos do parâmetro da função
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      // aqui eu altero a cor, mesmo que já havia sido definida anteriormente
      super(...args);
      this.cor = `${args[1]}, vermelho`; // com o args[0], eu pego o primeiro parâmetro do construtor
      this.nome = args[0].toUpperCase();
    }
  };
}

const animal = new Animal('geraldo', 'roxo');
console.log(animal);
