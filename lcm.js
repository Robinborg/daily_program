

const lcm = (...nums) => {
	const gcd = (x, y) => (!y ? x : gcd(y, x % y));
	const _lcm = (x, y) => (x * y) / gcd(x, y);
	return [...nums].reduce((a, b) => _lcm(a, b));
};

console.log(lcm(30, 7));
