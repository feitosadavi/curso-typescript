/* eslint-disable */

// Utiliza o & para criar tipos com intersecção entre outros tipos
// Só valida quando o objeto possui os valores com a intersecão que seu tipo requer

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome & TemSobrenome;

// Posso usar também desta forma
type AB = 'A' | 'B'; //Dentro de um conjunto, eu teria A e B
type AC = 'A' | 'C'; //Dentro de um conjunto, eu teria A e C

//Intersecção
type Intersec = AB & AC; //A intersecção entre AB e AC é A

const pessoa: Pessoa = {
  nome: 'Davi',
  sobrenome: 'Feitosa',
};

//Module mode
export default pessoa;
