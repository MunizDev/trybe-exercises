const promise = new Promise((resolve, reject) => {
  const numbers = [];
  let sum = 0;
  for (let index = 0; index < 10; index += 1) {
    numbers.push(Math.floor(Math.random() * 50 + 1));
  }
  numbers
    .map((element) => Math.pow(element, 2))
    .forEach((element) => {
      sum += element;
    });
  if (sum < 8000) {
    resolve(sum);
  } else {
    reject(sum);
  }
})
  .then((sum) => console.log(`o numero ${sum} é menor que 8000`))
  .catch((sum) => console.log(`o numero ${sum} é maior que 8000 :(`));
