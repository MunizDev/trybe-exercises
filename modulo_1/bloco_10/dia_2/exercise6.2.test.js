const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) =>
  new Promise((resolve, reject) => {
    const arrayAnimals = Animals.filter((animal) => animal.age === age);
    if (arrayAnimals.length !== 0) {
      return resolve(arrayAnimals);
    }
    return reject('Nenhum animal com essa idade!');
  });

const getAnimal = (age) => findAnimalByAge(age).then((list) => list);
// ---------------------

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal(5).then((animal) => {
        expect(animal).toEqual([{ name: 'Preguiça', age: 5, type: 'Cat' }]);
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal(10).catch((error) =>
        expect(error).toEqual('Nenhum animal com essa idade!'),
      );
    });
  });
});
