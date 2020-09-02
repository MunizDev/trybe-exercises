// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function retornaIndiceMaiorValor(arrayEscolhido) {
    let indiceAtual = 0;
    let indiceMaiorValor = 0;
    //verifica o maior valor do arrayEscolhido.
    for (i = 0; i < arrayEscolhido.length - 1; i += 1) {
        if (arrayEscolhido[i + 1] > arrayEscolhido[i]) {
            indiceMaiorValor = i + 1;
        }
    }
    return indiceMaiorValor
}


let arrayTeste = [2, 3, 6, 7, 10, 1];
console.log(retornaIndiceMaiorValor(arrayTeste));
