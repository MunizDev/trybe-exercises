const promise = new Promise((resolve, reject) => {
  const numbers = [];
  let sum = 0;
  for (let index = 0; index < 10; index += 1) {
    numbers.push(Math.floor(Math.random() * 50 + 1));
  }
  const squareNumbers = numbers.map((element) => Math.pow(element, 2));

  squareNumbers.forEach((element) => {
    sum += element;
  });
  if (sum < 8000) {
    resolve(sum);
  } else {
    reject('É mais de oito mil! Essa promise deve estar quebrada!');
  }
})
  .then((response) => {
    const sumNumbers = [];
    sumNumbers.push(response / 2, response / 3, response / 5, response / 10);
    return sumNumbers;
  })
  .then((response) => {
    new Promise((resolve, reject) => {
      let sumOfSucess = 0;
      response.forEach((element) => {
        sumOfSucess += element;
      });
      return console.log(
        `a segunda promisse somou os elementos ${response} e deu: ${sumOfSucess}`,
      );
    });
  })
  .catch((err) => console.log(err));
