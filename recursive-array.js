

const fillArray = n => {
	if (n < 1) {
		return [];
	}
	const someArray = fillArray(n - 1);
	someArray.push(n)
	return someArray;
};

console.log(fillArray(4));
