let { randomNumber } = require('./funcoes');

it('1. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
  randomNumber = jest.fn().mockReturnValue(10);

  expect(randomNumber()).toBe(10);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
});

it('2. utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo', () => {
  randomNumber = jest.fn().mockImplementation((a, b) => a / b);

  expect(randomNumber(8, 2)).toBe(4);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
});

it('3. crie uma nova implementação que receba três parâmetros e retorne sua multiplicação, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro.', () => {
  randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

  expect(randomNumber(8, 2, 2)).toBe(32);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);

  randomNumber.mockReset();

  randomNumber = jest.fn().mockImplementation((a) => 2 * a);

  expect(randomNumber(7)).toBe(14);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
});
