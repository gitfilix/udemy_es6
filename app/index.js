// destructuring on arrays
let animals = ['simba', 'sumsi', 'frank', 'penny'];
let [dog, bird] = animals;

console.log(dog, bird);

// destructuring assignements on objects
let king = {
    name: 'Lionbaby King',
    kids: 2,
    hobbies: 'hunting, lying arround'
}
let {name, hobbies} = king;

console.log("from an object", name, hobbies);
