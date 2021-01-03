// desta forma eu consigo passar parâmetros para o meu decorator
// eu faço a uma função que imita o decorator e recebe os parâmetros que eu desejo
// em seguida, retorno o verdadeiro decorator
function upperCase(param1: string, param2: string) {
  return function <T extends new (...args: any[]) => any>(target: T): T {
    console.log(param1);
    return class extends target {
      cor: string;
      nome: string;
      constructor(...args: any[]) {
        super(...args);
        this.cor = args[1].toUpperCase;
        this.nome = args[0].toUpperCase();
      }
    };
  };
}

// o decorador é chamado somente na hora da incialização da classe
@upperCase('Valor1', 'Valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

const animal = new Animal('geraldo', 'roxo');
console.log(animal);
