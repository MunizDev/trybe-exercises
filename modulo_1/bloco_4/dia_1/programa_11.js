// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as referências no site do course.

let salarioBruto = 3000;
let salarioBase;
let salarioLiquido;

//INSS

if (salarioBruto <= 0) {
    process.exit('salario bruto invalido, encerrando...')
}
else if (salarioBruto < 1556.94) {
    let alicota_8 = salarioBruto * 8 / 100;
    salarioBase = salarioBruto - alicota_8;
}
else if (salarioBruto < 2594.92) {
    let alicota_9 = salarioBruto * 9 / 100;
    salarioBase = salarioBruto - alicota_9;
}
else if (salarioBruto < 5189.82) {
    let alicota_11 = salarioBruto * 11 / 100;
    salarioBase = salarioBruto - alicota_11;
}
else {
    salarioBase = salarioBruto - 570.88;
}

// IR

if (salarioBase < 1903.98) {
    salarioLiquido = salarioBase;
}
else if (salarioBase < 2826.65) {
    let alicotaIR = salarioBase * 7.5 / 100;
    salarioLiquido = salarioBase - alicotaIR + 142.80;
}
else if (salarioBase < 3751.05) {
    let alicotaIR = salarioBase * 15 / 100;
    salarioLiquido = salarioBase - alicotaIR + 354.80;
}
else if (salarioBase < 4664.68) {
    let alicotaIR = salarioBase * 22.5 / 100;
    salarioLiquido = salarioBase - alicotaIR + 636.13;
}
else {
    let alicotaIR = salarioBase * 27.5 / 100;
    salarioLiquido = salarioBase - alicotaIR + 869.36;
}

console.log("O salário líquido é de: R$" + salarioLiquido);



