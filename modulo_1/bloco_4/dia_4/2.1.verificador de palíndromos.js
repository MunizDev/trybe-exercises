// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindromo(palavra) {

    let resultado = false;
    let palavraInvertida = '';

    for (i = palavra.length - 1; i >= 0; i -= 1) {
        palavraInvertida += palavra[i];
    }

    if (palavra === palavraInvertida) {
        resultado = true;
    }
    else {
        resultado = false;
    }
    return resultado;
}

console.log(verificaPalindromo('desenvolvimento'));