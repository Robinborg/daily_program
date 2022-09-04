

const isGenerator = val =>
	Object.prototype.toString.call(val) === '[object GeneratorFunction]';

console.log(isGenerator(function() {}));
console.log(isGenerator(function*() {}));
