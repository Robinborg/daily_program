

const toHash = (object, key) =>
	Object.values(object).reduce((acc, data, index) => {
		acc[!key ? index : data[key]] = data;
		return acc;
	}, {});

console.log(toHash([1, 2, 3, 4]));
