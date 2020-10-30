const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

const testUppercase = test('verifique a chamada do callback de uma função uppercase', (done) => {
  uppercase('lola', (stringUpperCase) => {
    expect(stringUpperCase).toBe('LOLA');
    done();
  });
});
