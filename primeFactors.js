

const primeFactors = n => {
	let results = [];
	let factor = 2;
	while (n > 1) {
		if (n % factor === 0) {
			results.push(factor)
			n /= factor;
		} else {
			factor++;
		}
	}
	return results;
};

console.log(primeFactors(128));
