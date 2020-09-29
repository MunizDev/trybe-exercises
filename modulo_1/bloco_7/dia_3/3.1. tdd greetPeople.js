const assert = require("assert");
const greetPeople = (people) => {
  const greeting = "Hello";
  const arrayGreeting = [];

  for (const person in people) {
    arrayGreeting.push(`${greeting} ${people[person]}`);
  }
  return arrayGreeting;
};

const parameter = ["Irina", "Ashleigh", "Elsa"];
const result = ["Hello Irina", "Hello Ashleigh", "Hello Elsa"];
const output = greetPeople(parameter);

assert.deepStrictEqual(output, result);
