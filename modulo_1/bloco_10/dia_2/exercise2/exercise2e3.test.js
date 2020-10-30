const { users, findUserById, getUserName } = require('./code');

describe('verifica o resultado da função getUserName', () => {
  test('Retorne o nome do usuario', () => {
    return getUserName(4).then((name) => {
      expect(name).toEqual('Mark');
    });
  });

  test('Retorna o erro caso o usuario nao exista', () => {
    const id = 9;
    return getUserName(id).catch((err) => {
      expect(err).toEqual({ error: 'User with ' + id + ' not found.' });
    });
  });
});

describe('verifica o resultado da função getUserName utilizando async/await', () => {
  test('Retorne o nome do usuario', async () => {
    const name = await getUserName(4);
    expect(name).toEqual('Mark');
  });

  test('Retorna o erro caso o usuario nao exista', async () => {
    const id = 9;
    try {
      await getUserName(id);
    } catch (error) {
      expect(error).toEqual({ error: 'User with ' + id + ' not found.' });
    }
  });
});
