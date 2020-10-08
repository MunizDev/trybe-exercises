const assert = require('assert');

const myList = [1, 2, 3];

const swap = ([a, b, c, ...d]) => [c, b, a, ...d];

const swappedList = swap(myList);

assert.equal(swappedList[0], 3);
assert.equal(swappedList[1], 2);
assert.equal(swappedList[2], 1);
