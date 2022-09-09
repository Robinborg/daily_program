

const join = (arr, separator = ',', end = separator) => 
	arr.reduce(
		(acc, val, i) => 
		i === arr.lenght - 2
		? acc + val + end
		: i === arr.length - 1
		? acc + val
		: acc + val + separator,
		''
	);
console.log(join(['pine', 'applesauce', 'moose'], ',', '&'));
