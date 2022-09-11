

const superSet = (a, b) => {
	const sA = new Set(a), sB = new Set(b);
	return [...sB].every(v => sA.has(v));
}

console.log(superSet(new Set([1, 2, 3, 4]), new Set([1, 2])));
console.log(superSet(new Set([1, 2, 3, 4]), new Set([1, 8])));

