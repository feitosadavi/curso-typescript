// usa implements para implementar um type alias
// se você precisar usar protected or private atributos, use classes abstratas

type TipoPessoa = {
  nome: string;
  sobrenome: string;
};
type NomeCompleto = {
  nomeCompleto(): string;
};
export class Pessoa implements TipoPessoa, NomeCompleto {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda');
console.log(pessoa.nomeCompleto());
