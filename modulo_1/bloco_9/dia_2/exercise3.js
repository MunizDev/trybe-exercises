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
    reject('falha');
  }
})
  .then((response) => {
    const sumNumbers = [];
    sumNumbers.push(response / 2, response / 3, response / 5, response / 10);
    console.log(sumNumbers);
  })
  .catch((err) => console.log(`resultado: ${err}`));
