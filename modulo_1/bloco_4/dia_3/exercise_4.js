// faça uma pirâmide com n asteriscos de base.

/*
para uma piramide de n=5 temos a seguinte sequência:
espaco-asteristico
2-1
1-3
0-5
logo vamos utilizar a mesma estrutura do exercício 3 porém alterando a quantidade de espaço e asteristicos impressos em cada linha do console.

notamos também pela forma da piramide que n deve ser ímpar.

a quantidade de espço inicial é igual a (n-1)/2.

a quantidade de asterísticos é 1, 1+2 , 3+2, 5+2....
*/

let n = 9;
let linha = "";
let espaco = "";
if (n > 1 && n % 2 === 1) {
    //altera a quantidade de asteristicos em cada linha
    for (let x = 1; x <= n; x += 2) {
        linha = "";
        espaco = "";
        //inclui os espacos em cada linha em função de n e x
        for (let j = 1; j <= (n - x)/2; j += 1) {
            espaco += " ";
        }
        //inclui os os ateristicos em cada linha em função de x
        for (let i = 1; i <= x; i += 1) {
            linha += "*";
        }
        console.log(espaco + linha);
    }
}
else{
    console.log('Aviso: o n precisa ser ímpar e maior que 1')
}