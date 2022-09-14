

const quarterYear = (date = new Date()) => [
	Math.ceil((date.getMonth() + 1) / 3),
	date.getFullYear()
];

console.log(quarterYear(new Date('04/28/1992')));
console.log(quarterYear());
