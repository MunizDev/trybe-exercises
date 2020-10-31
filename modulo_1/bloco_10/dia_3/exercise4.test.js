let { upperCase, firstLetter, concatenation } = require('./funcoes');

jest.mock('./funcoes');

describe('exercicio 4', () => {
  it('Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa.', () => {
    upperCase.mockImplementation((str) => str.toLowerCase());
    expect(upperCase('OiOiOi')).toBe('oioioi');
    expect(upperCase).toHaveBeenCalledTimes(1);
  });

  it('Para a segunda função, uma nova implementação deve retornar a última letra de uma string.', () => {
    firstLetter.mockImplementation((str) => str.slice(-1));
    expect(firstLetter('OiOiOi')).toBe('i');
    expect(firstLetter).toHaveBeenCalledTimes(1);
  });

  it('A terceira deve receber três strings e concatená-las.', () => {
    concatenation.mockImplementation((str1, str2, str3) => str1 + str2 + str3);
    expect(concatenation('OiOiOi', ' lua', ' praia')).toBe('OiOiOi lua praia');
    expect(concatenation).toHaveBeenCalledTimes(1);
  });
});
