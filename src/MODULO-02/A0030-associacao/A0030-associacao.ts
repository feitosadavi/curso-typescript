// um objeto usa outro

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando...`);
  }
}

export class Escritor {
  // O null na Ferramenta indica que o escritor não será dependente da ferramenta
  private _ferramenta: Ferramenta | null = null;
  constructor(private _nome: string) {}

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }
  get nome(): string {
    return this._nome;
  }

  escrever(): void {
    if (!this.ferramenta) {
      console.log('Não posso escrever sem ferramenta');
      return; // apenas para matar o método
    }
    console.log('escrevendo');
  }
}

const escritor = new Escritor('Davi');
const caneta = new Caneta('Bic');
const maquina = new MaquinaEscrever('Philco');
escritor.ferramenta = caneta;

escritor.escrever();
console.log(escritor);
