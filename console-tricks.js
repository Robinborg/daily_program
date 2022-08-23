

const x = 1, y = 2, z = 3;

console.log({x, y, z});

const outer = () => {
	const inner = () => console.trace('Hello');
	inner();
};

outer();

console.group('Outer');
console.log('Hey');
console.groupCollapsed('Inner');
console.log('Heuuuuuyt');
console.groupEnd();
console.groupEnd();
console.log('hoi');

console.debug('Debuggah');
console.info('info');
console.warn('WARNING');
console.error('ERrrror');

const value = 30
console.assert(value === 30, 'Value is not 30');
console.assert(value === 40, 'Value is not 50');

Array.from({ length: 7 }).forEach(() => console.count('someItems'));
console.countReset('someItems');

console.time('Super fast stuff');
console.timeLog('Super fast stuff');
console.timeEnd('Super fast stuff');

