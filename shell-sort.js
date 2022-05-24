

const shellSort = (nums) => {
	let increment = nums.length / 2;
	while (increment > 0) {
		for (i = increment; i < nums.length; i++) {
			let j = i;
			let temp = nums[i];

			while (j >= increment && nums[j - increment] > temp) {
				nums[j] = nums[j - increment];
				j = j - increment;
			}
			nums[j] = temp;
		}

		if (increment == 2) {
			increment = 1;
		} else {
			increment = parseInt(increment * 5 / 11);
		}
	}
	return nums;
}

let anArray = [85, 34, 351, 53, 39, 1, 8, 2];
console.log(shellSort(anArray));
