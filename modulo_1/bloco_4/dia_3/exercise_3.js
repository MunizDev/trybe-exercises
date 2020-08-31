//Inverta o lado do triângulo. Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

//para um triangulo de base n, precisamos imprimir respectivamente n-1, n-2, ... , n-n espaços, isso é 

let n = 9;
let linha = "";
let espaco = "";
if (n > 1) {
    //altera a quantidade de asteristicos em cada linha
    for (let x = 1; x <= n; x += 1) {
        linha = "";
        espaco = "";
        //inclui os espacos em cada linha em função de n e x
        for (let j = 1; j <= n - x; j += 1) {
            espaco += " ";
        }
        //inclui os os ateristicos em cada linha em função de x
        for (let i = 1; i <= x; i += 1) {
            linha += "*";
        }
        console.log(espaco + linha);
    }
}