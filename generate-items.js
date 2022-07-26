

const generateItems = (n, fn) => 
	Array.from({ length: n }, (_, i) => fn(i));

console.log(generateItems(10, Math.random));

