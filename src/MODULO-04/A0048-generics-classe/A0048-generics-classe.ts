// quando vc constroi uma classe em que os argumentos serão inseridos ao instanciá-la, o ts conseguirá fazer
// a inferência de tipos
// mas, se os valores forem definidos posteriomente, o ts não irá conseguirinferir os tipos

export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {}; // chave vai ser um número e objeto vai ser um T

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }
  pop(): T | void {
    // irá retornar vazio caso a pilha esteja vazia
    if (this.estaVazia()) return undefined;
    this.contador--;
    const elemento = this.elementos[this.contador]; // salvo o elemento a ser deletado
    delete this.elementos[this.contador]; // deleto o elemento salvo
    return elemento; // retorno o elemento salvo
  }
  estaVazia(): boolean {
    return this.contador === 0; // retorna true se o contador for zero, indicando que a pilha está vazia
  }
  tamanho(): number {
    return this.contador;
  }
  mostrarPilha(): void {
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}

const pilha = new Pilha<number>();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.mostrarPilha();
