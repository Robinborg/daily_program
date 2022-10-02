

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


async function sleepWalking() {
	console.log("I am sleeping for 20 seconds");
	await sleep(20000);
	console.log("I just woke up after my 20 seconds");
}
sleepWalking()
