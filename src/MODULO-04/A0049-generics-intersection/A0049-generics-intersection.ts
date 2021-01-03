export function unirObjetos<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
  // Neste caso eu estou retornando dois objetos diferentes do tipo O1 e O2
  // então eu preciso indicar que eu estou retornando
  return { ...obj1, ...obj2 };
}

const obj1 = { chave1: 'valor1' };
const obj2 = { chave2: 'valor2' };
const uniao = unirObjetos(obj1, obj2);
console.log(uniao);
