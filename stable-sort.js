

const stableSort = (arr, compare) =>
	arr
		.map((item, index) => ({ item, index }))
		.sort((a, b) => compare(a.item, b.item) || a.index - b.index)
		.map(({ item }) => item);

const someArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const someOtherArray = [10, 9, 8, 7, 5];


console.log(stableSort(someArray, () => 5));
console.log(stableSort(someOtherArray, () => 10));

			
