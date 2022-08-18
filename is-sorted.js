

const sortedArray = arr => {
	if (arr.lenght <= 1) return 0;
	const direction = arr[1] - arr[0];
	for (let i = 2; i < arr.length; i++) {
		if ((arr[i] - arr[i - 1]) * direction < 0) return 0;
	}
	return Math.sign(direction);
};

console.log(sortedArray([1, 2, 3, 4]))
console.log(sortedArray([1, 3, 2, 4]))

