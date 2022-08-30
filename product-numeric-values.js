

const prod = (...arr) => [...arr].reduce((acc, val) => acc * val, 1);

console.log(prod(1, 2, 3, 4));
console.log(prod(...[1, 2, 3, 4]));
