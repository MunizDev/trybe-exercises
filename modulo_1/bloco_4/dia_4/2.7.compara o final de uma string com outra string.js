// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function invertePalavra(palavra) {
    let palavraInvertida = "";
    for (i = palavra.length - 1; i >= 0; i -= 1) {
        palavraInvertida += palavra[i];
    }
    return palavraInvertida;
}

function comparaWordEnd(word, end) {
    let resultado = true;
    let iword = invertePalavra(word);
    let iend = invertePalavra(end);
    let tamanhoEnd = iend.length;
    //verificação das duas palavras
    for (i = 0; i < tamanhoEnd; i += 1) {
        if (iword[i] !== iend[i]) {
            resultado = false;
        }
    }
    return resultado;
}

let palavraMaior = "joaofernando";
let palavraMenor = "fernan";
console.log(comparaWordEnd(palavraMaior, palavraMenor));