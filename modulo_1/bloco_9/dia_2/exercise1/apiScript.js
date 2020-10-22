const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { Accept: 'application/json' },
};

const jokePhrase = document.getElementById('jokeContainer');

async function fetchJoke() {
  const aJoke = await fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => data);
  jokePhrase.innerText = aJoke.joke;
}

window.onload = () => fetchJoke();
