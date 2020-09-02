// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function retornaIndiceMaiorValor(arrayEscolhido) {
    let indiceMaiorValor = 0;
    let numeroVitorias = 0;
    //verifica o maior valor do arrayEscolhido.
    for (j = 0; j < arrayEscolhido.length; j += 1) {
        numeroVitorias = 0;
        for (i = 0; i < arrayEscolhido.length; i += 1) {
            if (arrayEscolhido[j] >= arrayEscolhido[i]) {
                numeroVitorias += 1;
            }
        }

        if (numeroVitorias === arrayEscolhido.length) {
            indiceMaiorValor = j;
        }
    }
    return indiceMaiorValor
}

let arrayTeste = [2, 3, 6, 7, 10, 1, 9, 11, 1, 3];
console.log(retornaIndiceMaiorValor(arrayTeste));


