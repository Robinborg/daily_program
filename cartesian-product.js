

const cartesianProduct = (a, b) =>
	  a.reduce((p, x) => [...p, ...b.map(y => [x, y])], []);
console.log(cartesianProduct(['x', 'y'], [1, 2]));
