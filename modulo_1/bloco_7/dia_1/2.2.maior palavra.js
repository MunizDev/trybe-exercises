const longestWord = phrase => {
  let lengthBigWord = 0;
  let indexBigWord = 0;
  let eachWord = [];
  eachWord = phrase.split(" ");

  for (let index = 0; index < eachWord.length; index += 1) {
    let compared = eachWord[index];

    if (compared.length > lengthBigWord) {
            lengthBigWord = compared.length;
            indexBigWord = index;
    }

  }
  return eachWord[indexBigWord];
}

const phraseTest = `Antônio foi no banheiro e não sabemos o que aconteceu`
console.log(`a maior palavra da frase é = ${longestWord(phraseTest)}`);

