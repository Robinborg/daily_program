

const asyncUppercase = item => 
	new Promise(resolve => 
		setTimeout(
			() => resolve(item.toUpperCase()),
			Math.floor(Math.random() * 1000)
		)
	);
const upperCaseItems = async () => {
	const items = ['a', 'b', 'c'];
	for (item of items) {
		const uppercaseItem = await asyncUppercase(item);
		console.log(uppercaseItem);
	}
	console.log("items processed");
};
upperCaseItems();
