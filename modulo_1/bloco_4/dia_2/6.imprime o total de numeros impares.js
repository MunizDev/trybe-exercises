// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpares = [];

for (i in numbers) {
    if (numbers[i] % 2 !== 0) {
        numerosImpares.push(numbers[i]);
    }
}

if (numerosImpares.length !== 0) {
    console.log('o total de numeros ìmpares é: ' + numerosImpares.length);
}
else {
    console.log('nenhum valor ímpar encontrado');
}