

const frequencies = arr =>
	arr.reduce((a, v) => {
		a[v] = a[v] ? a[v] + 1 : 1;
		return a;
	}, {});

console.log(frequencies(['a', 'a', 'a', 'a', 'b', 'b', 'b', 'c', 'c', 'd', 'z']));


