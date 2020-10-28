const myFizzBuzz = require('../functions/4.fizzbuzz');

test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz(3)).toBe('fizz');
});

test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz(5)).toBe('buzz');
});

test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
  const number = 2;
  expect(myFizzBuzz(number)).toBe(number);
});

test('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz('5')).toBe(false);
  expect(myFizzBuzz('ola')).toBe(false);
});
