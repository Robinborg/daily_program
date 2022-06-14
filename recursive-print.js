

const printArray = (nums, n) => {
	// base case
	if (n == nums.length) 
		return n
	// Increment index
	printArray(nums, n + 1)
	// print new number
	console.log(nums[n]);
};

const someNumbers = [1, 2, 3];

printArray(someNumbers, 0);

console.log("----------------------");

const topDownApproach = (nums, n) => {
	if (n < 0) 
		return n;
	topDownApproach(nums, n - 1);
	console.log(nums[n]);
};

topDownApproach(someNumbers, 2);


