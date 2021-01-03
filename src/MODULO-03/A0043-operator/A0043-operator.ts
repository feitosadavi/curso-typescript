// Encadeamento opcional e Operador de coalescência nula

// não valores são apenas null e undefined

type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O título',
  texto: 'O texto',
};

// O ECMAScript 2020 me permite usar o encadeamento opcional
// se trata de um recurso que me permite utilizar funções encadeadas da seguinte maneira:
console.log(documento.data?.toDateString()); // o toDateString() só irá ser realizado caso exista data
console.log(documento.data?.toDateString() ?? 'Não existe data'); // o operador de covalescência nula é o ??
// ele executa a expressão do lado direito caso a expressão do lado esquerdo for um não-valor
