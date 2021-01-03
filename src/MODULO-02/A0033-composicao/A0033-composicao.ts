// um objeto tem outro como parte dele, exemplo:
// um motor que é parte integral do carro
// o coração que é parte de um ser humano
// relação mais forte
// você instancia uma classe dentro de outra

export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }
  acelerar(): void {
    this.motor.acelerar();
  }
  parar(): void {
    this.motor.parar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor está ligado...');
  }
  acelerar(): void {
    console.log('Motor está acelerando...');
  }
  parar(): void {
    console.log('Motor está parando...');
  }
}

// eu não preciso instanciar o motor fora do carro
// pois eu já o faço dentro da classe Carro
const carro = new Carro();
carro.ligar();
carro.acelerar();
carro.parar();
