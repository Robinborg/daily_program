

const promise = new Promise((resolve, reject) => {
	const random_int = Math.floor(Math.random() * 8);
	if (random_int < 4) {
	  reject(new Error("whoops"));
	}
	else {
		resolve("ok");
	}
}).then(result => {
	console.log(result);
}).catch(error => {
	console.log(error);
});
