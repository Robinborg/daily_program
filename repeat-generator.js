

const repeatGenerator = function* (val) {
	let v = val;
	while (true) {
		let newV = yield v;
		if (newV !== undefined) v = newV;
	}
};

const repeator = repeatGenerator(4);

console.log(repeator.next());
console.log(repeator.next());
console.log(repeator.next());
console.log(repeator.next());
console.log(repeator.next());
console.log(repeator.next());
console.log(repeator.next(3));
console.log(repeator.next());
console.log(repeator.next());
console.log(repeator.next());
