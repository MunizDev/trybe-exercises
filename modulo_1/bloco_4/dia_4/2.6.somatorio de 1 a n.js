// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function somatorio(n) {
    let resultado = 0;
    for (i = 1; i <= n; i += 1) {
        resultado += i;
    }
    return resultado;
}

console.log(somatorio(5));