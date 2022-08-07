

const chunk = function* (itr, size) {
	let chunks = [];
	for (const v of itr) {
		chunks.push(v);
		if (chunks.length === size) {
			yield chunks;
			chunks = [];
		}
	}
	if (chunks.length) yield chunks;
}

const someArray = [1, 2, 3, 4, 5, 6, 7];
console.log([...chunk(someArray, 2)]);
