type Animal = {
  name: string;
  species: string;
};

function logAnimalName<AnimalType extends Animal>(
  animal: AnimalType
) {
  console.log(animal.name);
}

logAnimalName({
  name: "Biscuit",
  species: "cat",
  age: 17
});

const numbers: Array<number> = [1, 2, 3, 4, 5];
const strings: Array<string> = ["a", "b", "c", "d"];

const animals: Array<Animal> = [
  { name: "Jungle", species: "cat" },
  { name: "Pie", species: "dog" },
  { name: "Jason", species: "rabbit" }
];

console.log(animals);
console.log(numbers);
