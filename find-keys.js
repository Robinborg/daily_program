

const findKeys = (obj, val) => 
	Object.keys(obj).filter(key => obj[key] === val);

const programmingLanguages = {
	"c++": 1983,
	javascript: 1995,
	python: 1991,
	c: 1970,
	haskell: 1990,
	rust: 2006
}

console.log(findKeys(programmingLanguages, 1995));
console.log(findKeys(programmingLanguages, 2006));
