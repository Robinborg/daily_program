

function insertionSort(nums) {
	let n = nums.length;

	for (let i = 1; i < n; i++) {
		let current = nums[i];

		let j = i - 1;
		while((j > -1) && (current < nums[j])) {
			nums[j + 1] = nums[j];
			j --;
		}
		nums[j + 1] = current;
	}
	return nums;
}

let someArray = [6, 5, 4, 3, 2, 1];

console.log(insertionSort(someArray));
