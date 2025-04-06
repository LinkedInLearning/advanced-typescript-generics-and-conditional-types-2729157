type Animal = {
  name: string;
  species: string;
  age?: number;
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

// Old syntax
// function updateAnimalOld(
//   animal: Animal,
//   newName?: string,
//   newSpecies?: string
// ) {
//   return {
//     name: newName ?? animal.name,
//     species: newSpecies ?? animal.species
//   };
// }

function updateAnimal(
  animal: Animal,
  fieldsToUpdate: Partial<Animal>
): Animal {
  return { ...animal, ...fieldsToUpdate };
}

const biscuit: Animal = {
  name: "Biscuit",
  species: "cat"
};

const updatedBiscuit = updateAnimal(biscuit, {
  name: "Peep"
});
console.log(updatedBiscuit);

const readonlyBiscuit: Readonly<Animal> = {
  name: "Biscuit",
  species: "cat",
  age: 17
};

const readOnlyAnimals: ReadonlyArray<Animal> = [
  { name: "Oatmeal", species: "guinea pig", age: 4 },
  { name: "Milton", species: "horse", age: 10 }
];

readOnlyAnimals.push({ name: "Fluffy", species: "rabbit" });
