

const meridiemSuffix = num =>
	num === 0 || num === 24
		? 12 + ' am'
		: num === 12
		? 12 + ' pm'
		: num < 12
		? (num % 12) + ' am'
		: (num % 12) + ' pm';

console.log(meridiemSuffix(24));
console.log(meridiemSuffix(12));
console.log(meridiemSuffix(14));
console.log(meridiemSuffix(3));
