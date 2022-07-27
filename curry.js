

const curry = (fn, arity = fn.length, ...args) =>
	arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

console.log(curry(Math.pow)(4)(4));
console.log(curry(Math.pow, 3)(2)(10)(100));
console.log(curry(Math.min, 5)(2)(1.999)(.999)(10)(10));
