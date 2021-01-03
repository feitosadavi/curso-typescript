// no typescript, só temos overload no campo de tipo e valor

// o overload no typescript me permite criar diversas assinaturas
// para um só tipo. Neste exemplo eu digo que um função do tipo Adder
// pode se comportar das seguintes maneiras:
type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0); // caso a função receba um array
  return x + (y || 0); // pode ser que y seja undefined, pq eu não o defini sozinho do tipo adder
};
console.log(adder(1));
