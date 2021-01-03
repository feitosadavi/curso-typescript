/* FORMA INCORRETA
export function isNumber(value: unknown): boolean {
  return typeof value === 'number'; // retorna true or false
}
export function soma<T>(...args: T[]): number | null {
  const retorno = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return retorno;
}
*/

// FORMA CORRETA
export function isNumber(value: unknown): value is number {
  // o ts já sabe que o retorno é boolean. Então eu digo que se o retorno for true, o valor será number.
  // Isto é o predicado de tipos
  return typeof value === 'number'; // retorna true or false
}
export function soma<T>(...args: T[]): number {
  // o spread operator no args (...) serve para indicar que receberá vários argumentos
  const retorno = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return retorno;
}

console.log(soma(1, 2, 3, 4, 5));
//  Dicas
//console.log(soma(1, 2, 3, 4, 'a'));
// Desta forma dá erro, pois o ts infere o tipo a partir do primeiro elemento.Não permitindo a entrada de strings, já que o primeiro elemento é number

// Forma correta
console.log(soma(...[1, 2, 3, 4, 'a'])); // Desta forma o ts infere que o tipo será number[] ou string[]
// eu uso o spread operator aqui pois o argumento que será passado para a função irá ficar dentro de outro array
