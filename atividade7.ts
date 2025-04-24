/*10 pontos
7 - Desenvolva um programa que leia números até que a soma dos valores
digitados seja maior que 100.
Nome aluno:
*/
let teclado = require('prompt-sync')();

let contador = 1;
let somaPositivos = 0;
let somaNegativos = 0;
let qntdNegativos = 0;

while (contador <= 10) {
    let numero = parseFloat(teclado(`Digite o ${contador}º número: `));

    if (numero >= 0) {
        somaPositivos += numero;
    } else {
        somaNegativos += numero;
        qntdNegativos++;
    }

    contador++;
}

let mediaNegativos = 0;
if (qntdNegativos > 0) {
    mediaNegativos = somaNegativos / qntdNegativos;
}

console.log(`Soma dos números positivos: ${somaPositivos}`);
console.log(`Média dos números negativos: ${mediaNegativos}`);