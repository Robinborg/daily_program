

const crossProduct = (a, b) => 
	a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);

console.log(crossProduct([1, 2], [3, 4]));
