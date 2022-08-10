

const timer = callback => {
	console.time("timeTaken");
	const r = callback();
	console.timeEnd("timeTaken");
	return r;
}

console.log(timer(() => Math.pow(100, 100)));
