

const min = (x, y, z) => {
	if (x <= y && x <= z) {
		return x;
	}
	if (y <= x && y <= z) {
		return y;
	} else {
		return z;
	}
};

const editDistance = (string1, string2, m, n) => {
	if (m == 0) {
		return n;
	}
	if (n == 0) {
		return m;
	}
	if (string1[m - 1] == string2[n - 1]) {
		return editDistance(string1, string2, m - 1, n - 1);
	}
	return 1 + min(editDistance(string1, string2, m, n - 1),
		             editDistance(string1, string2, m - 1, n),
		             editDistance(string1, string2, m - 1, n - 1));
};

let aString = "cow";
let bString = "cat";
console.log(editDistance(aString, bString, aString.length, bString.length));
