

const invertObject = (obj, fn) => 
	Object.keys(obj).reduce((acc, key) => {
		const val = fn ? fb(obj[key]): obj[key];
		acc[val] = acc[val] || [];
		acc[val].push(key);
		return acc;
	}, {});

console.log(invertObject({ x: 3.14, y: 1.41421, z: 1.618 }));

