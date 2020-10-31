function randomNumber() {
  return Math.round(Math.random() * 100);
}

function upperCase(str) {
  return str.toUpperCase();
}

function firstLetter(str) {
  return str.slice(0, 1);
}

function concatenation(str1, str2) {
  return str1 + str2;
}

async function dogApi() {
  const dogFetch = await fetch('https://dog.ceo/api/breeds/image/random');
  const json = await dogFetch.json();
  return json;
}

module.exports = { randomNumber, upperCase, firstLetter, concatenation, dogApi };
