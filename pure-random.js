

const getNum = (min = 0, max = 1, num = Math.random()) =>
	Math.max(Math.min(num, max), min);

console.log(getNum());
