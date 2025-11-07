const animals = [
  { name: "cat", sound: "meow", foodRequirements: { food: 2, water: 5 } },
  { name: "dog", sound: "woof" },
];

function useAnimals(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    },
  ];
}

export default animals;
export { useAnimals };
