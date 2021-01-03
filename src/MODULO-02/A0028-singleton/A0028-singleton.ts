// padrão de projeto singleton
// ou a instância de uma classe é criada somente quando não possui instâncias
// ou quando determinada instância é chamada, retornamos uma instância já criada

// Singleton - GoF | Factory Method - GoF

export class Database {
  private static database: Database;

  private constructor(
    // posso criar um construtor privado
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) return Database.database;
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123456');
console.log(db1);

const db2 = Database.getDatabase('localhost', 'loot', '45'); // agora não haverá mais instanciamento de duas classes iguais
console.log(db2);
