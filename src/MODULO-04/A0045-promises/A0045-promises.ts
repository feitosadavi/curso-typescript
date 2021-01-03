const arrayNumeros: Array<number> = [1, 2, 3, 4, 5, 6]; // posso tipar um array usando generic types desta maneira

async function promiseAsync() {
  return 1;
}

function minhaPromise(): Promise<number> {
  // desta forma eu posso tipar uma Promise, dizendo ao ts que ela irá resolver um number
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((resultado) => console.log(resultado + 1));
