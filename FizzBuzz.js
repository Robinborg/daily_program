

const fizzBuzz = () =>{
	const number = parseInt(prompt("Enter a number: "))
	for (let i = 0; i <= number; ++i){
		if (i % 3 == 0 && i % 5 == 0){
			console.log("Fizz Buzz!");
		}

		if (i % 3 == 0){
			console.log("Fizz")
		}

		if (i % 5 == 0){
			console.log("Buzz")
		}
	}

};
