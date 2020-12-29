/* eslint-disable */

// vamos ver como criar um type alias para um callback ou outras funções

type MapStringCallback = (item: string) => string; // o tipo definido aqui deverá receber uma string como parâmetro e retornar uma string

export function mapString(
  array: string[],
  callbackfn: MapStringCallback,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(item));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMap = mapString(abc, (item) => item.toUpperCase()); // depois de abc eu passo a função de callback
console.log(abc);
console.log(abcMap);
