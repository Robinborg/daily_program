

const uniqueSymmetricDifference = (a, b) => [
	...new Set([
		...a.filter(v => !b.includes(v)),
		...b.filter(v => !a.includes(v)),
	]),
];
console.log(uniqueSymmetricDifference([1, 2, 3], [1, 2, 4]));
console.log(uniqueSymmetricDifference([1, 2, 2], [1, 3, 1]));
