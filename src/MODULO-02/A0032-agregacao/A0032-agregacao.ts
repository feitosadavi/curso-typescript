// um objeto precisa de outro

// trata-se de uma relação em que a dependência de uma classe para com a outra é muito grande
// pense em um carro. Um carro pode existir sem
// suas rodas, e as rodas sem o carro. Mas para o carro
// funcionar, ele precisa de suas rodas, entendeu?
// O carro precisa AGREGAR rodas, para que seja possível andar nele

export class CarrinhodeCompras {
  private readonly _produtos: Produto[] = [];

  inserirProduto(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this._produtos.push(produto);
    }
  }
  get produto(): Produto[] {
    return this._produtos;
  }
  quantidade(): number {
    return this._produtos.length;
  }
  total(): number {
    return this._produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto = new Produto('Mouse Gamer', 200);
const produto2 = new Produto('Teclado Gamer', 350);
const carrinho = new CarrinhodeCompras();

carrinho.inserirProduto(produto, produto2);
console.log(carrinho.total());
console.log(carrinho.quantidade());
