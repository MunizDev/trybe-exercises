const getPlanet = () => {
  const mars = {
    name: 'Mars',
    distanceFromSun: {
      value: 227900000,
      measurementUnit: 'kilometers',
    },
  };
  console.log('Returned planet: ', mars);
};

let s = 0;

const x = setInterval(() => {
  s += 1;
  console.log(`segundo: ${s}`);
  if (s >= 4) {
    clearInterval(x);
  }
}, 1000);


setTimeout(() => {
  getPlanet(); // imprime Marte depois de 4 segundos
}, 4000);
