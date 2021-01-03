// serve principalmente para modelar objetos
// não consigo fazer expressões em interfaces
// interfaces podem extender outras interfaces

interface TipoNome {
  nome: string;
}
interface TipoSobrenome {
  sobrenome: string;
}
interface TipoNomeCompleto {
  nomeCompleto(): string;
}
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}
export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda');
console.log(pessoa.nomeCompleto());

// com a interface, nós podemos fazer o declaration merge
// funciona como o enum, veja:

interface Carro {
  readonly marca: string;
  rodas?: number; // posso ter regras opcionais
}
interface Carro {
  portas: number;
}

// da forma acima, a interface Carro irá acumular as regras
// das duas declarações
