// o uso do this como tipo permite o uso de chamadas em cadeia

export class Calculadora {
  constructor(public numero: number) {}

  add(n: number): this {
    // o "this" indica que a função retorna o mesmo tipo que a classe: "numbero: number"
    this.numero += n;
    return this;
  }
  mult(n: number): this {
    this.numero *= n;
    return this;
  }
}

const calc = new Calculadora(6);
calc.add(2).mult(2); // chamadas em cadeia
console.log(calc);

// Builder - GoF
// neste padrão, eu posso setar partes do objeto de forma gradativa
// então eu não preciso criar um construtor
export class RequestBuilder {
  private method: 'get' | 'post' | null = null; // desta forma eu consigo inicializar a variável, mesmo que tenha valor nulo
  // pq, se o method for nulo, terá valor null
  private url: string | null = null;
  // a IDE diz que o method e url não estão sendo usados, mas estão sim

  // o this é um objeto com os atributos da class
  setMethod(method: 'get' | 'post'): this {
    // indica qual deve ser o retorno
    this.method = method;
    return this; // retorna o objeto com todos os atributos da classe
  }
  setUrl(url: string): this {
    this.url = url;
    return this;
  }
  send(): void {
    console.log('enviado! ');
  }
}

const request = new RequestBuilder();
console.log(request.setMethod('get'));

request.setMethod('post').setUrl('www.insomniadevs.com');
console.log(request);

/* as chamadas em cadeia só funcionam se o métodos da classe
  retornar this. Isso acontece pois, o this retorna o objeto;
  e este objeto é quem possui os métodos disponíveis. Se você
  retornar qualquer coisa além do this, como um number, o método
  que você tentará chamar não irá conseguir acessar nada, pois estará
  tentando acessar um número que não possui métodos disponíveis

*/
