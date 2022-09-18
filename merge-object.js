

const merge = (...objs) =>
	[...objs].reduce(
		(acc, obj) =>
		  Object.keys(obj).reduce((a, k) => {
		  	acc[k] = acc.hasOwnProperty(k)
		  		? [].concat(acc[k]).concat(obj[k])
		  		: obj[k]
		  	return acc;
		}, {}),
		{}
	);

console.log(merge({a: 1, b: 2, c: 3}, {z: 9, x: 8, y: 7}));
