

const call = (key, ...args) => context => context[key](...args);

Promise.resolve([1, 2, 3])
	.then(call('map', x => 2 * x))
	.then(console.log);
const map = call.bind(null, 'map');
Promise.resolve([1, 2, 3])
	.then(map(x => 2 * x))
	.then(console.log);

