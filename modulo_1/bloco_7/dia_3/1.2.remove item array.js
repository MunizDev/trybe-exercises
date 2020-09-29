const assert = require("assert");

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
const array = [1, 2, 3, 4];
assert.deepStrictEqual(myRemove(array, 3), [1, 2, 4]); // OK
assert.notDeepStrictEqual(myRemove(array, 3), [1, 2, 3, 4]); // OK
assert.deepStrictEqual(array, [1, 2, 3, 4]); // OK NAO SOFREU
assert.deepStrictEqual(myRemove(array, 5), [1, 2, 3, 4]); // OK
