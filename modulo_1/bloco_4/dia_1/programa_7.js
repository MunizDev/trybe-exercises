// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

// Porcentagem >= 90 -> A

// Porcentagem >= 80 -> B

// Porcentagem >= 70 -> C

// Porcentagem >= 60 -> D

// Porcentagem >= 50 -> E

// Porcentagem < 50 -> F

// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota_porcentagem = 33;

if (nota_porcentagem >= 90 && nota_porcentagem <= 100) {
    console.log('A');
}
else if (nota_porcentagem >= 80 && nota_porcentagem < 90) {
    console.log('B');
}
else if (nota_porcentagem >= 70 && nota_porcentagem < 80) {
    console.log('C');
}
else if (nota_porcentagem >= 60 && nota_porcentagem < 70) {
    console.log('D');
}
else if (nota_porcentagem >= 50 && nota_porcentagem < 60) {
    console.log('E');
}
else if (nota_porcentagem >= 0 && nota_porcentagem < 50) {
    console.log('F');
}
else {
    console.log('nota fora do intervelo entre 0 e 100');
}