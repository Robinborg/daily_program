

const functionName = fn => (console.debug(fn.name), fn);

console.log(functionName(Math.max)(5, 6));
