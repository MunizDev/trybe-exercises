// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.


//vamos usar uma variavel chamada ocorrencia para contar as vezes de repetição de cada elemento do array dado.
function inteiroMaisRepete(arrayInteiros) {
    let ocorrencia = 0;
    let ocorrenciaMaior = 0;
    let maior = arrayInteiros[0];
    //numero i
    for (let i in arrayInteiros) {
        ocorrencia = 0;
        //percorrendo os outros elementos
        for (let j = 0; j < arrayInteiros.length; j += 1) {
            if (arrayInteiros[i] === arrayInteiros[j]) {
                ocorrencia += 1;
            }
        }
        if (ocorrencia > ocorrenciaMaior) {
            ocorrenciaMaior = ocorrencia;
            maior = arrayInteiros[i];
        }
    }
    return maior;
}

let arrayTeste = [0, 3, 2, 5, 8, 2, 3, 2];
console.log(inteiroMaisRepete(arrayTeste));
