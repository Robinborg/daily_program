

function quickSort(nums) {
	if (nums.length <= 1) {
		return nums;
	}
	let pivot = nums[0];
	let left = [];
	let right = [];
	for (let i = 1; i < nums.length; i++) {
		nums[i] < pivot ? left.push(nums[i]) : right.push(nums[i]);
	}
	return quickSort(left).concat(pivot, quickSort(right));
}

let someArray = [93, 34, 35, 2, 214, 34, 5, 7]
for (let i = 0; i < someArray.length; i++) {
	console.log(Array[i]);
}

let sortedArray = quickSort(someArray);

for (let i = 0; i < sortedArray.length; i++) {
	console.log(sortedArray[i]);
}

