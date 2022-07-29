

const checkFunction = val => typeof val === 'function';

console.log(checkFunction("two"))
console.log(checkFunction(x => x * x))

