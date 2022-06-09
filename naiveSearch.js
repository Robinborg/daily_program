

const naiveSearch = (string, subString) => {
	if (subString.length > string) return false;
	for (let i = 0; i < string.length; i++) {
		for (let j = 0; j < subString.length; j++) {
			if (string[i + j] !== subString[j]) break;
			if (j === subString.length - 1) return true;
		}
	}
	return false
};

let aWord = "Javascriptness"
let bWord = "ipt"

console.log(naiveSearch(aWord, bWord));
