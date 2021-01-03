// um tipo genérico é um tipo que é atribuído desta maneira: <T> -> o que vaidentro não importa
// este tipo é atribuído confome o valor do parâmetro de uma função
/// se tipo do parâmetro de uma função com tipo genérico for number, então o tipo <T> será um number também

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type filterCallback<U> = (
  // aqui eu digo que eu quero receber um generic type. É como se eu estivesse recebendo um parametro de uma função
  value: U,
  index?: number,
  array?: U[],
) => boolean;

export function meuFilter<T>(array: T[], callbackfn: filterCallback<T>): T[] {
  // No filter callback eu estou recebendo o T do meuFIlter
  const newArray: T[] = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      // se a função retornar true
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const arrayFiltrado = meuFilter(array, (value) => value < 5);

const arrayFiltradoOriginal = array.filter((value) => value < 5);
console.log(arrayFiltrado);
