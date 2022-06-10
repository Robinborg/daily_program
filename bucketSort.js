

const bucketSort = (nums, size = 5) => {
	const min = Math.min(...nums);
	const max = Math.max(...nums);
	const buckets = Array.from(
		{length: Math.floor((max - min) / size) + 1},
		() => []
	);
	nums.forEach(val => {
		buckets[Math.floor((val - min) / size)].push(val);
	});
	return buckets.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], []);
};

console.log(bucketSort([6, 3, 4, 1]));
