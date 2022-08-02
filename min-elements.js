

const minElements = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

console.log(minElements([0.5, 0.005, 0.0005, 0.1, 0.55, 0.2], 4));
