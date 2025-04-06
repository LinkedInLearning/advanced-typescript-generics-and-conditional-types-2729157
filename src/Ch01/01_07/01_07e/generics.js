"use strict";
function logAnimalName(animal) {
    console.log(animal.name);
}
logAnimalName({
    name: "Biscuit",
    species: "cat",
    age: 17
});
const numbers = [1, 2, 3, 4, 5];
const strings = ["a", "b", "c", "d"];
const animals = [
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
function updateAnimal(animal, fieldsToUpdate) {
    return Object.assign(Object.assign({}, animal), fieldsToUpdate);
}
const biscuit = {
    name: "Biscuit",
    species: "cat"
};
const updatedBiscuit = updateAnimal(biscuit, {
    name: "Peep"
});
console.log(updatedBiscuit);
const readonlyBiscuit = {
    name: "Biscuit",
    species: "cat",
    age: 17
};
readonlyBiscuit.name = "Jungle";
