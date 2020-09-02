// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function retornaIndiceMenorValor(arrayEscolhido) {
    let indiceAtual = 0;
    let indiceenorrValor = 0;
    //verifica o menor valor do arrayEscolhido.
    for (i = 0; i < arrayEscolhido.length - 1; i += 1) {
        if (arrayEscolhido[i + 1] < arrayEscolhido[i]) {
            indiceMenorValor = i + 1;
        }
    }
    return indiceMenorValor
}


let arrayTeste = [2, 4, 6, 7, 10, 0, -3];
console.log(retornaIndiceMenorValor(arrayTeste));
