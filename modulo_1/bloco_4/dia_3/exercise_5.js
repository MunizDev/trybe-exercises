// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar

/*
notamos que temos a mesma piramide do exercicio 4, no entanto tem um pequeno detalhe na impressão dos asterísticos.

para n=7 percebemos que os espaços do meio seguem na sguinte sequência: x-2 espaços exceto quando x=1 ou quando x=n

então podemos utilizar o if para alterar a quantidade de * colocados.
*/
let n = 15;
let linha = "";
let espaco = "";
let espacoMeio = "";
if (n > 1 && n % 2 === 1) {
    //altera a quantidade de asteristicos em cada linha
    for (let x = 1; x <= n; x += 2) {
        linha = "";
        espaco = "";
        espacoMeio = "";
        //inclui os espacos em cada linha em função de n e x
        for (let j = 1; j <= (n - x) / 2; j += 1) {
            espaco += " ";
        }
        //inclui os os ateristicos em cada linha em função de x
        if (x > 1 && x < n) {
            //coloca a sequência de espaços no meio.
            for (let i = 1; i <= x - 2; i += 1) {
                espacoMeio += " ";
            }
            linha += "*" + espacoMeio + "*";
        }
        else {
            //mantém do mesmo jeito da piramide do exercício 4.
            for (let i = 1; i <= x; i += 1) {
                linha += "*";
            }
        }
        //impressao de cadqa linha
        console.log(espaco + linha);
    }
}
else {
    console.log('Aviso: o n precisa ser ímpar e maior que 1')
}