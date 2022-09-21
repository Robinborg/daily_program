

const randomNumber = (limit = 100, random = Math.random) => random() * limit;


console.log(randomNumber(10));
console.log(randomNumber(10, () => 0.1000));
