const sum = require('../functions/1.sum a e b');

test('o retorno de sum(4, 5) é 9', () => {
  expect(sum(4, 5)).toBe(9);
});

test('o retorno de sum(0, 0) é 0', () => {
  expect(sum(0, 0)).toBe(0);
});

test(`Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)`, () => {
  expect(() => sum(4, "5")).toThrow(Error);
});

test(`a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")`, () => {
  expect(() => sum(4, "5")).toThrow('parameters must be numbers');
});