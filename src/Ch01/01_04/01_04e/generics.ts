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
