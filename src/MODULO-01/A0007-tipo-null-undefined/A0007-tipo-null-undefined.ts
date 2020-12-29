/* eslint-disable */

// para parâmetros opcionais, eu sempre preciso checar se ele existe
export function createPerson(
  firstName: string,
  lastName?: string,
): {
  // abertura da função
  firstName: string;
  lastName?: string;
} {
  // type annotation
  return {
    firstName,
    lastName,
  }; // corpo da função
}

// quando recebemos parâmetros any, precisamos fazer tais verificações
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  else return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');
