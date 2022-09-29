

const flags = arr => arr.reduce((acc, str) => ({...acc, [str]: true}), {});

console.log(flags(['blue', 'black']));
