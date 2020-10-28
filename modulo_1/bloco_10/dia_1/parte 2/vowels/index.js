// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  strArray = str.toLowerCase().split('');
  let totalVowels = 0;
  strArray.forEach((element) => {
    if (element === 'a') {
      totalVowels += 1;
    }
    if (element === 'e') {
      totalVowels += 1;
    }
    if (element === 'i') {
      totalVowels += 1;
    }
    if (element === 'o') {
      totalVowels += 1;
    }
    if (element === 'u') {
      totalVowels += 1;
    }
  });
  return totalVowels;
}

console.log(vowels('Why do you ask?'));

module.exports = vowels;
