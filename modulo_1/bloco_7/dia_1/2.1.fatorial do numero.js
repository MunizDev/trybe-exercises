const fatorial = numero => {
  let resultado = numero;
  for (let index = 1; index < numero; index += 1) {
    resultado *= index;
  }
  return resultado;
}

console.log(`o resultado é ${fatorial(4)}`);