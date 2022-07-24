

const dateGenerator = function* (start, end, step = 1) {
	let d = start;
	while (d < end) {
		yield new Date(d);
		d.setDate(d.getDate() + step);
	}
};

console.log([...dateGenerator(new Date('2021-07-24'), new Date('2021-08-24'))]);
