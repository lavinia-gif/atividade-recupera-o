/* 10 pontos
9 – Pedir ao usuário dois números e imprimir nesse intervalo os números ímpares.
Nome aluno:
10 pontos*/
let teclado = require('prompt-sync')();


let somaIdades = 0;
let qtdPessoas = 0;
let idade = 0;

while (idade >= 0) {
    idade = parseInt(teclado("Digite a idade (ou número negativo para parar): "));

    if (idade >= 0) {
        somaIdades += idade;
        qtdPessoas++;
    }
}

let media = 0;
if (qtdPessoas > 0) {
    media = somaIdades / qtdPessoas;
    console.log(`A média das idades é: ${media}`);
} else {
    console.log("Nenhuma idade válida foi digitada.");
}
