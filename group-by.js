

const groupBy = (arr, fn) => 
	arr
		.map(typeof fn === 'function' ? fn : val => val[fn])
		.reduce((acc, val, i) => {
			acc[val] = (acc[val] || []).concat(arr[i]);
			return acc;
		}, {});


console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy(["one", "two", "three"], 'length'));
