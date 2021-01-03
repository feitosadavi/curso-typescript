// checagens para refinar um tipo são type guards

export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('a', 'b'));

type Pessoa = { nome: string };
type Animal = { cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  constructor(public nome: string) {}
}

// errado, pois a classe pode receber pessoa ou animal e animal não tem nome
function mostraNome(obj: PessoaOuAnimal) {
  console.log(obj.nome);
}

// errado, pois a classe pode receber pessoa ou animal e animal não tem nome
function mostraNomeCerto(obj: PessoaOuAnimal): void {
  // pode ser isso: if ('nome' in obj) console.log(obj.nome);
  //ou:
  if (obj instanceof Aluno) console.log(obj.nome);
  // verifico se o objeto é  uma instância de aluno
  // se for, é pq então obj tem um nome
}
mostraNomeCerto(new Aluno('João')); // estou instanciando aluno aqui, então obj é sim uma instância de Aluno
