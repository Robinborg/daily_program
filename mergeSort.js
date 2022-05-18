

function merge(left, right) {
	let mergedArray = [];

	while (left.length && right.length) {
		if (left[0] < right[0]) {
			mergedArray.push(left.shift());
		} else {
			mergedArray.push(right.shift());
		}
	}
	return [...mergedArray, ...left, ...right];
}

function mergeSort(array) {
	const mid = array.length / 2;

	if (array.length <= 1) {
		return array;
	}

	const left = array.splice(0, mid);
	const right = array;
	return merge(mergeSort(left), mergeSort(right));
}

let someArray = [23, 35, 19, 1234, 42, 4, 6, 6];

console.log(mergeSort(someArray));
