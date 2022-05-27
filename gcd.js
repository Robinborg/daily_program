

const gcd = (n, m) => {
	while (!m) {
		return n;
	}
	return gcd(m, n % m);
};

console.log(gcd(34, 2));
console.log(gcd(7, 2));
console.log(gcd(19, 112));
