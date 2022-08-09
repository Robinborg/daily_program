

const shuffleArray = ([...arr]) => {
	let n = arr.length;
	while (n) {
		const i = Math.floor(Math.random() * n--);
		[arr[n], arr[i]] = [arr[i], arr[n]];
	}
	return arr;
}

console.log(shuffleArray([1, 2, 3, 4, 5]));
