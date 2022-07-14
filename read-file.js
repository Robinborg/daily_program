

const fs = require('fs');

const readFileLines = filename => 
	fs
		.readFileSync(filename)
		.toString('UTF8')
		.split('\n');

let strs = readFileLines('lines.txt');
console.log(strs)


