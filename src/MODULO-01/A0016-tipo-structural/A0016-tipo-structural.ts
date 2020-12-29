/* eslint-disable */

type VerifyUserFn = (user: User, sentValue: User) => boolean; // Eu não preciso de atributos que tenham uma identidade User, mas sim de atributos que cumpram as regras do User
type User = { username: string; password: string };

// qualquer objeto que eu passar que tenha a estrutura do User para esta função, o typescript irá aceitar
// isto acontece pois a linguagem não liga para a identidade dos objetos, mas sim se a estrtura esta correta
// então se eu não quiser passar o tipo User para o bdUser e sentUser, eu não preciso, desde que eles tenham a estrutura correta
const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'davi', password: 'feitosa' };
const sentUser = { username: 'davi', password: 'feitosa' };

if (verifyUser(bdUser, sentUser) === true) {
  console.log('Bem vindo!');
} else {
  console.log('Login incorreto!');
}
