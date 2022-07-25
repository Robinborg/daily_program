

const closest = (arr, n) => 
	arr.reduce((acc, num) => (Math.abs(num - n) < Math.abs(acc - n) ? num : acc));

console.log(closest([1, 2, 3, 4, 5], 6));
