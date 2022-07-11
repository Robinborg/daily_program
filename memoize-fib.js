

const memoize = fn => new Proxy(fn, {
	cache: new Map(),
	apply (target, thisArg, argsList) {
		let cacheKey = argsList.toString();
		if (!this.cache.has(cacheKey))
			this.cache.set(cacheKey, target.apply(thisArg, argsList));
		return this.cache.get(cacheKey);
	}
});
const fibonacci = n => (n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
const memoizedFibonacci = memoize(fibonacci);

for (let i = 0; i < 100; i++) {
	console.log(memoizedFibonacci(i));
}
