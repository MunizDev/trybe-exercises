// Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

let numeroEscolhido = 8;
let numeroDivisor = 0;
let tresDivisores = false;
for (i = 2; i < numeroEscolhido; i += 1) {
    numeroDivisor = i;
    if (numeroEscolhido % numeroDivisor === 0) {
        tresDivisores = true;
    }
}
if (tresDivisores === false && numeroEscolhido !== 1) {
    console.log('O numero é primo');
}
else {
    console.log('O numero NÃO é primo');
}