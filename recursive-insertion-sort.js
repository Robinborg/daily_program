

let recursiveInsertion = (nums, i = nums.length) => {
	if (i <= 1) {
		return;
	}

	recursiveInsertion(nums, i - 1);
	
	let key = nums[i - 1];
	let j = i - 2;

	while (j >= 0 && nums[j] > key) {
		nums[j + 1] = nums[j];
		j--;
	}
	nums[j + 1] = key;
}

let anArray = [1, 23, 2391, 293, 2, 85];
recursiveInsertion(anArray);
console.log(anArray);
