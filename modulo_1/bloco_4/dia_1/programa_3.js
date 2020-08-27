// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 3;
let b = 6;
let c = 9;

// a || b || c || a && b || a && c || b && c || todos iguais.

if (a > b && a > c){
    console.log('a variavel a é a maior, cujo valor é: ' + a);
}
if (b > a && b > c){
    console.log('a variavel b é a maior, cujo valor é: ' + b);
}
if (c > a && c > b){
    console.log('a variavel c é a maior, cujo valor é: ' + c);
}
if (a === b && a > c){
    console.log('a variavel a e b são iguais e maiores que c, e seus valores são iguais a: ' + a);
}
if (a === c && c > b){
    console.log('a variavel a e c são iguais e maiores que b, e seus valores são iguais a: ' + c);
}
if (b === c && b > a){
    console.log('a variavel b e c são iguais e maiores que a, e seus valores são iguais a: ' + b);
}
if (a === b && b === c){
    console.log('a variavel a, b e c são iguais');
}