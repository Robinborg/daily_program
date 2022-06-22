

const luhnCheck = num => {
	const arr = (num + '')
		.split('')
		.reverse()
		.map(x => parseInt(x));
	const lastDigit = arr.shift();
	let sum = arr.reduce(
		(acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val)),
		0
	);
	sum += lastDigit;
	return sum % 10 === 0;
};

console.log(luhnCheck('4485275742308327'));
console.log(luhnCheck(6011329933655299));
console.log(luhnCheck(123456789));
