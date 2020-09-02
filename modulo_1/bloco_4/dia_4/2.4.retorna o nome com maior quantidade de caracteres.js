// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function retornaNomeMaior(arrayEscolhido) {
    //compara dois elementos do array
    let indiceNomeMaior = 0;
    for (i = 0; i < arrayEscolhido.length - 1; i += 1) {
        if (arrayEscolhido[i + 1].length > arrayEscolhido[i].length) {
            indiceNomeMaior = i + 1;
        }
    }
    return arrayEscolhido[indiceNomeMaior];
}

let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(retornaNomeMaior(arrayTeste));