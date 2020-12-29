/* eslint-disable */

// Indica que a função tem retorno vazio

// É uma boa prática ser explícito com o retoro das funções e métodos
function semRetorno(...args: string[]): void {
  // espalha os argumentos, quem devem ser string
  console.log(args.join(' ')); // junta os valores do array, separando-os com um espaço
}

semRetorno('Davi', 'Feitosa');

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',

  exibirNome(): void {
    // desta forma, não permite que a função retorne algo, devido ao void
    console.log(this.nome + ' ' + this.sobrenome);
  },
};
pessoa.exibirNome();

export { pessoa };
