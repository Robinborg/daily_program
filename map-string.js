

const mapString = (str, fn) => 
	str
		.split('')
		.map((c, i) => fn(c, i, str))
		.join('');

console.log(mapString('GOOGLE IT', char => char.toLowerCase()));
