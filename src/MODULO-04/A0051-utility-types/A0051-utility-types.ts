// Record -> o Record é um tipo genérico representa um objeto em que você especifica a chave e o tipo dele
type ob1Values = string | number;
export const objeto1: Record<string, ob1Values> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(objeto1);

// Required -> transforma todos os campos em required, mesmo se forem definidos com '?'
type PessoaProtocolo = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};
type PessoaRequired = Required<PessoaProtocolo>;

// Partial -> transfoma tudo em opcional
type PessoaPartial = Partial<PessoaRequired>;

// Readonly -> transforma tudo em readonly
type PessoaReadonly = Readonly<PessoaPartial>;

// Pick -> seleciona apenas os campos que vc quer
type PessoaPick = Pick<PessoaReadonly, 'nome' | 'sobrenome'>; // aqui eu pego apenas o nome e o sobrenome

export const objeto2: PessoaRequired = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(objeto2);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

// Tipo Exclude -> computa todos os tipos que estão em ABC e não estão em CDE
type TipoExclude = Exclude<ABC, CDE>; // Resta somente A e B

// Tipo Exclude -> computa todos os tipos que podem ser atribuídos aos tipos de outros types kkkkk
type TipoExtract = Extract<ABC, CDE>; // Apenas C. Afinal Temos C em ABC e em CDE. Você pode entender como uma intersecção

// Exemplo: Eu quero converter o _id do Mongo para o id da API
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

// aqui eu digo que quero pegar tudo de account mongo, mas excluindo a assinatura que tiver uma chave chamada id. Por fim faço uma intersecção
// com uma string de nome id
type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: '123f156s4f548s45fs4',
  nome: 'Davi',
  idade: 17,
};

// recebo um valor do tipo do mongo para retornar outro do tipo da api
function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  // crio uma constante chamada _id, que é a mesma que a que está no accountMongo
  // depois crio outra com os dados restantes do accountMongo
  return { id: _id, ...accountData }; // por fim, retorno o accountData e p _id, mas no formato da AccountApi: id
}

console.log(accountMongo);
const accountApi: AccountApi = mapAccount(accountMongo);
console.log(accountApi);
