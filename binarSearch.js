

function binarySearch(nums, target) {
	let left = 0;
	let right = nums.length;

	while(left <= right) {
		let mid = Math.floor(right + left / 2);
		
		if (nums[mid] == target) {
			return mid;
		}
		if (nums[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
}

let someArray = [1, 2, 3, 4, 5];
console.log(binarySearch(someArray, 5));
