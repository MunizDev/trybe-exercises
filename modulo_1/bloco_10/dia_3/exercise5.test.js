let { upperCase, firstLetter, concatenation } = require('./funcoes');

describe('exercicio 5', () => {
  const upperCaseMock = jest.spyOn(
    { upperCase, firstLetter, concatenation },
    'upperCase',
  );

  it('Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa.', () => {
    upperCaseMock.mockImplementation((str) => str.toLowerCase());
    expect(upperCaseMock('OiOiOi')).toBe('oioioi');
    expect(upperCaseMock).toHaveBeenCalledTimes(1);

    upperCaseMock.mockRestore();

    expect(upperCase('OiOiOi')).toBe('OIOIOI');
  });
});
