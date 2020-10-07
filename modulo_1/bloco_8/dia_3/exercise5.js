const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  const allCharacters = names.join('').toLowerCase();
  const arrayCharacters = allCharacters.split('');
  const totalA = (acc, curr) => (curr === 'a' ? acc + 1 : acc);
  return arrayCharacters.reduce(totalA, 0);
}

assert.deepEqual(containsA(), 20);
