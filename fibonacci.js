

function fibonacci(num, result = [0, 1, 1]) {
	if (result[num]) {
		return result[num];
	}
	result[num] = fibonacci(num - 1, result) + fibonacci(num - 2, result);
	return result[num];
}

console.log(fibonacci(144));

