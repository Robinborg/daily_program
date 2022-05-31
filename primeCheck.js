

const checkPrime = num => {
	const upperBound= Math.floor(Math.sqrt(num));
	for (let i = 2; i <= upperBound; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return num >= 2;
};

console.log(checkPrime(7));
console.log(checkPrime(4));
