

const objectPair = arr =>
	arr.reduce((a, [key, val]) => ((a[key] = val), a), {});


console.log(objectPair([['a', 1], ['b', 4]]));


