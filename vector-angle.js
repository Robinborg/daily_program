

const vectorAngle = (x, y) => {
	let mX = Math.sqrt(x.reduce((acc, n) => acc + Math.pow(n, 2), 0));
	let mY = Math.sqrt(y.reduce((acc, n) => acc + Math.pow(n, 2), 0));
	return Math.acos(x.reduce((acc, n, i) => acc + n * y[i], 0) / (mX * mY));
};

console.log(vectorAngle([6, 9], [3, 15]));
