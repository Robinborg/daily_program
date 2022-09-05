

const deepMerge = (a, b, fn) => 
	[...new Set([...Object.keys(a), ...Object.keys(b)])].reduce(
		(acc, key) => ({...acc, [key]: fn(key, a[key], b[key] )}),
		{}
	);

console.log(deepMerge(
	{a: true, b: { c: [1, 2, 3] }},
	{a: false, b: {d: [1, 2, 3] }}, (key, a, b) => (key === 'a' ? a && b : Object.assign({}, a, b))));
