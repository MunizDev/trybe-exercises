const assert = require('assert');
const addAllnumbers = (arrayNumbers) => {
    let resultado = null;
    for (let index = 0; index < arrayNumbers.length; index += 1) {
        resultado += arrayNumbers[index];
    }
    return resultado;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);