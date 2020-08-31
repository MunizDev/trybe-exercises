// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let n = 5;
let linha = "";
if (n > 1) {
    for (let x = 1; x <= n; x += 1) {
        linha = "";
        for (let i = 1; i <= x; i += 1) {
            linha += "*";
        }
        console.log(linha);  
    }
}