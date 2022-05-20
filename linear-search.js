

function linearSearch(nums, target) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === target){
			return i;
		}
	}
	return -1;
}


let someArray = [1, 2, 3, 4, 5, 6];

console.log(linearSearch(someArray, 4));

