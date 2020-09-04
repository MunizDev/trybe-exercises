// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

/*
1.Podemos começar pensando em comparar cada inteiro do array com os demais.
2.Podemos criar uma função que faz essa comparação e nos retorna o número de repetições na variavel numeroRepeticoes.
3 Depois temos que criar outra função que compara o número de repetições e retorne o indice do elemento que possui o valor da variavel numeroRepeticoes maior.
*/

//com um elemento do array escolhido a função percorre os demais para contar o número de repetições.
function numeroRepeticoes(array, indice) {
    //arrayteste, 1
    let numeroRepeticoes = 0;
    for (let i = 0; i < array.length; i += 1) {
        if (array[indice] === array[i]) {
            numeroRepeticoes += 1;
        }
    }
    return numeroRepeticoes;
}

//compara se o elemento seguinte possui mais repetições se sim, armazena esse elemento na variavel elementoMaisRepete e depois de percorrer todo array retorna essa variavel.
function comparaElementosArray(arrayEscolhido) {
    let elementoMaisRepete = arrayEscolhido[0];
    for (let j = 0; j < arrayEscolhido.length - 1; j += 1) {
        if (
            numeroRepeticoes(arrayEscolhido, j + 1) > numeroRepeticoes(arrayEscolhido, j)
        ) {
            elementoMaisRepete = arrayEscolhido[j + 1];
        }
    }
    return elementoMaisRepete;
}

let arrayTeste = [2, 3, 2, 5, 8, 2, 3];
console.log(comparaElementosArray(arrayTeste));






//arrumar função comparaElementosArray
/*
podemos montar um array paralelo com a contagem de repetições de cada inteiro...
deixando os indices paralelos dos dois arrays (contagem de repeticao, arrayEscolhido)
podemos achar o maior número no array contagem de repetição e usar esse infice para retornar o valor do arrayEscolhido que mais se repete
*/