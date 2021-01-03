// a classe é um molde para criar objetos
// métodos estáticos só podem ser executados dentro de sua classe e pela classe não instanciada
// objetos não podem utilizar métodos estáticos

// crio um tipo para a função estática criaPessoa
// todos os atributos deste tipo são opcionais
type customPerson = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
  cpf?: string;
};

export class Pessoa {
  static nomePadrao = '';
  static sobrenomePadrao = '';
  static idadePadrao = 0;
  static cpfPadrao = '';

  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    public cpf: string,
  ) {}

  // com este método estático eu consigo instanciar uma classe apenas com os atributos que eu desejo
  static criaPessoa({ nome, sobrenome, idade, cpf }: customPerson): Pessoa {
    //verifico se os argumentos foram inseridos. Se não forem, serão 'nulos'
    if (!nome) nome = Pessoa.nomePadrao; // preciso indicar o nome da classe para acessar seu atributo estático
    if (!sobrenome) sobrenome = Pessoa.sobrenomePadrao;
    if (!idade) idade = Pessoa.idadePadrao;
    if (!cpf) cpf = Pessoa.cpfPadrao;

    // retorno uma nova instância com as opções inseridas
    return new Pessoa(nome, sobrenome, idade, cpf);
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '123.456.789-00');
pessoa.cpf = '123.456.798-99';

const novaPessoa = Pessoa.criaPessoa({ nome: 'Davi' });
console.log(novaPessoa);
