

const maxNum = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

console.log(maxNum([1, 2, 3, 4], 3));
console.log(maxNum([1, 12, 13, 4], 2));
