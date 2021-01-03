export class Empresa {
  // se vc omitir o escopo do atributo (public, private, etc). O typescript entenderá que ele é publico
  public readonly nome: string; // imutável
  private readonly colaboradores: Colaborador[] = []; // não posso alterar o valor, mas posso enviar valores
  protected readonly cnpj: string;

  //Inicializando o valor
  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public addColaborador(colaboradores: Colaborador[]): void {
    colaboradores.forEach((colaborador) => {
      this.colaboradores.push(colaborador);
    });
  }

  public mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

// posso usar classes como tipos
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Insomnia Devs', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Júlio', 'Ferreira');
const colaborador2 = new Colaborador('Davi', 'Feitosa');
const colaborador3 = new Colaborador('Fernanda', 'Carvalho');
empresa1.addColaborador([colaborador1, colaborador2, colaborador3]);
empresa1.mostrarColaboradores();
