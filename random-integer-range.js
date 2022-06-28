

const randomIntegerRange = (min, max) => 
	Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomIntegerRange(0, 5));
console.log(randomIntegerRange(0, 100));
console.log(randomIntegerRange(0, 1000));

