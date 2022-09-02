

const pick = (obj, arr) => 
	arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});

console.log(pick({a: 11, c: 22, b: 33}, ['a', 'c']));
