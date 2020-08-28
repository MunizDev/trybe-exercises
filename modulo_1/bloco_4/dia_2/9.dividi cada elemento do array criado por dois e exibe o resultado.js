// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

novoArray = [];
for (i = 1; i < 26; i += 1) {
    novoArray.push(i);
}

for (j in novoArray) {
    console.log(novoArray[j] / 2);
}