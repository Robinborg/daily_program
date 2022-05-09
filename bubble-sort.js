

let someArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(nums){
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length - i - 1; j++) {
			if (nums[j] > nums[j+1]) {
				let temp = nums[j];
				nums[j] = nums[j + 1];
				nums[j + 1] = temp;
			}
		}
	}
};

console.log(someArray);
bubbleSort(someArray);
console.log(someArray);

