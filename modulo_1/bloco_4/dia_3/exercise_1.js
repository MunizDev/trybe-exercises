// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

/*
1. se n for maior que 1 continuar, se não parar.
2. estrutura de repetição.
3. console.log
*/

let n = 6;
let horizontal = "";
if (n > 1){
    for (let i = 1; i <= n; i += 1){
        horizontal += "*";
    }
    for (let j = 1; j <= n; j += 1){
        console.log(horizontal);
    }
}