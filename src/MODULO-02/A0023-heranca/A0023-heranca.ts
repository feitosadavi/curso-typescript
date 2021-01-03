export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }
  getCpf(): string {
    return this.cpf;
  }
  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public nota: number, // já estou construindo de forma reduzida
  ) {
    super(nome, sobrenome, idade, cpf);
  }
}

const aluno = new Aluno('Davi', 'Feitosa', 17, '036.247.971-23', 10.0);
console.log(aluno);
