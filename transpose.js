

const transpose = arr => arr[0].map((col, i) => arr.map(row => row[i]));

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
