

type Animal = {
	species: string;
	sound: string;
	legs: number;
	colors: string[];
}

function makeAnAnimal(species: string, sound: string, legs: number, colors: string[]): Animal {
	const animalObject = {
		species,
		sound,
		legs,
		colors
	}
	return animalObject;
}

const dog = makeAnAnimal("dog", "bark", 4, ["brown", "black", "white", "yellow"]);
console.log(dog);
