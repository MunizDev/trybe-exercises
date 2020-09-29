const assert = require("assert");
const findTheNeedle = (arrayWords, item) => {
  let wordIndex = null;
  const wordNotFound = -1;
  for (let index = 0; index < arrayWords.length; index += 1) {
    if (arrayWords[index] === item) {
      wordIndex = index;
    }
  }
  if (wordIndex !== null) {
    return wordIndex;
  } else {
    return wordNotFound;
  }
};

let words = ["house", "train", "slide", "needle", "book"];
let expected = 3;
let output = findTheNeedle(words, "needle");
assert.strictEqual(output, expected);

words = ["plant", "shelf", "arrow", "bird"];
expected = 0;
output = findTheNeedle(words, "plant");
assert.strictEqual(output, expected);

words = ["plant", "shelf", "arrow", "bird"];
expected = -1;
output = findTheNeedle(words, "plat");
assert.strictEqual(output, expected);
