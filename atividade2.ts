
/* (5 pontos)
2 - Escreva um programa que receba três números inteiros e mostre eles em ordem decrescente.
Nome Aluno:Lavinia Maria Silva Campos
*/
const teclado = require(`prompt-sync`)();

let n1: number = parseInt (teclado(`digite o numero 1 `));
let n2: number = parseInt (teclado(`digite o numero 2 `));
let n3: number = parseInt (teclado(`digite o numero 3 `));

if (n1 >= n2 && n2 >= n3) {
    console.log(`Ordem decrescente: ${n1}, ${n2}, ${n3}`);
} else if (n1 >= n3 && n3 >= n2) {
    console.log(`Ordem decrescente: ${n1}, ${n3}, ${n2}`);
} else if (n2 >= n1 && n1 >= n3) {
    console.log(`Ordem decrescente: ${n2}, ${n1}, ${n3}`);
} else if (n2 >= n3 && n3 >= n1) {
    console.log(`Ordem decrescente: ${n2}, ${n3}, ${n1}`);
} else if (n3 >= n1 && n1 >= n2) {
    console.log(`Ordem decrescente: ${n3}, ${n1}, ${n2}`);
} else {
    console.log(`Ordem decrescente: ${n3}, ${n2}, ${n1}`);
}

    