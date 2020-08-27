// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.

let a = 30;
let b = 60;
let c = 90;


if (a + b + c === 180) {
    console.log("os angulos pertencem a um triangulo valido");
}
else {
    console.log("os angulos NAO pertencem a um triangulo valido");
}

