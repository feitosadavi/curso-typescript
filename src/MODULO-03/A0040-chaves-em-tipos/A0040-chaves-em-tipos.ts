type Veiculo = {
  marca: string;
  ano: string;
};
type Car = {
  brand: Veiculo['marca']; // seleciono a mesma marca do veiculo
  year: Veiculo['ano']; // seleciono o mesmo ano do veiculo
  name: string;
};
