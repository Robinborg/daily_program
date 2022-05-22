

function selectionSort(nums) {
	let n = nums.length;

	for (let i = 0; i < n; i++) {
		let min = i;
		for (let j = i + 1; j < n; j++) {
			if(nums[j] < nums[min]) {
				min = j;
			}
		}
		if (min != i) {
			let temp = nums[i];
			nums[i] = nums[min];
			nums[min] = temp;
		}
	}
	return nums;
}

let someArray = [7, 5, 40, 3, 11, 20, 89];

console.log(selectionSort(someArray));

