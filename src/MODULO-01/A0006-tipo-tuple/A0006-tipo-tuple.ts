/* eslint-disable */

// com o typescript eu consigo deixar os dados inseridos nas tuplas extremamente rígidos

const dadosCliente1: [number, string] = [1, 'Luiz']; // defino os valores permitidos na tupla
const dadosCliente2: [number, string, string?] = [1, 'Luiz']; // posso colocar um dados opcional
const dadosCliente1Imutavel: readonly [number, string] = [1, 'Luiz']; // desta forma, eu posso definir uma tupla de estrutura imutável! Evitando então o uso de pop e push

dadosCliente1[0] = 100; // possto mudar, pois é number
dadosCliente1[0] = 'cem'; // não possto mudar, pois é string
