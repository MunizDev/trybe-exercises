let { dogApi } = require('./funcoes');

jest.mock('./funcoes');

afterEach(() => {
  dogApi.mockReset();
});

describe('exercicio 6', () => {
  it('O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess".', () => {
    dogApi.mockResolvedValue('request sucess');
    expect(dogApi()).resolves.toBe('request sucess');
    expect(dogApi).toHaveBeenCalledTimes(1);
  });

  it('O segundo deve interpretar que a requisição falhou e ter como valor "request failed".', () => {
    dogApi.mockRejectedValue('request failed');
    expect(dogApi()).rejects.toBe('request failed');
    expect(dogApi).toHaveBeenCalledTimes(1);
  });
});
