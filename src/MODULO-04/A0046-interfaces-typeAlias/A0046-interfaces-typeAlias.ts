interface PessoaProtocolo<T = string, U = number> {
  // eu posso atribuir nos "parâmetros" dos generic types os tipos de cada letra,
  //sem que eu precise definir os tipos ao declarar o objeto
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno: PessoaProtocolo = {
  nome: 'Davi',
  sobrenome: 'Feitosa',
  idade: 17,
};

console.log(aluno);
