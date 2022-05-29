const permutations = nums => {
	  if (nums.length <= 2) return nums.length === 2 ? [nums, [nums[1], nums[0]]] : nums;
	  return nums.reduce(
			(acc, item, i) =>
			acc.concat(
				permutations([...nums.slice(0, i), ...nums.slice(i + 1)]).map(val => [
					item,
          ...val,
       ])
     ),
   []
  );
};


console.log(permutations([20, 21, 23]));
