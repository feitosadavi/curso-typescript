/* eslint-disable */

// constantes sao tipos literais:
const y = 10;
/*  aqui, o y não é um number mas sim um
    subtipo de number. É um valor literal.
    Afinal, como é uma constante, não pode ser
    alterada. Só pode ser 10
*/

// eu posso utilizar <as const> para utilizar determinado valor como uma constante
const pessoa = {
  nome: 'Luiz' as const, // o nome irá se tornar uma constante
  sobrenome: 'Miranda',
};

//Module mode
export default y;
