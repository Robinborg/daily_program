

const renameKeys = (keysMap, obj) => 
	Object.keys(obj).reduce(
		(acc, key) => ({
			...acc,
			...{ [keysMap[key] || key]: obj[key] }
		}),
		{}
	);
const someObj = {name: "Bob", job: "Front-End master", shoeSize: 100};
console.log(renameKeys({ name: "firstName", job: "passion" }, someObj));
