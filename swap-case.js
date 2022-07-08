

const swapCase = str => 
	[...str]
		.map(c => (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()))
		.join('');


console.log(swapCase("Writing some JaVaScRipt CODE is Fun"));

