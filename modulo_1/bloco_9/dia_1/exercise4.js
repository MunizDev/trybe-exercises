const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
    console.log(`Mars temperature is: ${getMarsTemperature()} degree Celsius`)
}

let s = 0;

const x = setInterval(() => {
    s += 1;
    console.log(`segundo: ${s}`);
    if (s >= 5) {
      clearInterval(x);
    }
  }, 1000);

setTimeout(() => {
    sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
}, messageDelay());

