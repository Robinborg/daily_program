

const aPromise = new Promise((resolve, reject) => {
	let request = false;
	if (request) {
		resolve("Got it");
	} else {
		reject("Didn't get it");
	}
});

aPromise.then(result => {
	console.log(result);
});
aPromise.catch(error => {
	console.log(error);
});
