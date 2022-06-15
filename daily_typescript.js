function makeAnAnimal(species, sound, legs, colors) {
    var animalObject = {
        species: species,
        sound: sound,
        legs: legs,
        colors: colors
    };
    return animalObject;
}
var dog = makeAnAnimal("dog", "bark", 4, ["brown", "black", "white", "yellow"]);
console.log(dog);
