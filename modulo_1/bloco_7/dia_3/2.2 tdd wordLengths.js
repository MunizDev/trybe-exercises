const assert = require("assert");

const wordLengths = (arrayWord) => {
  const arrayLength = [];
  for (let index = 0; index < arrayWord.length; index += 1) {
    arrayLength.push(arrayWord[index].length);
  }
  return arrayLength;
};

const words = ["sun", "potato", "roundabout", "pizza"];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, "function");
const output = wordLengths(words);
assert.deepEqual(output, expected);
