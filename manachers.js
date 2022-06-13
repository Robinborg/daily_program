

function findLongestPalindromicString(text) {
	let N = text.length;
	if (N == 0)
		return;
	N = 2 * N + 1;
	let L = new Array(N + 1);
	L[0] = 0;
	L[1] = 1;
	let C = 1;
	let R = 2;
	let i = 0;
	let iMirror;
	let maxLPSLength = 0;
	let maxLPSCenterPosition = 0;
	let start = -1;
	let end = -1;
	let diff = -1;

	for (i = 2; i < N; i++) {
		iMirror = 2 * C - i;
		L[i] = 0;
		diff = R - i;

		if (diff > 0) 
			L[i] = Math.min(L[iMirror], diff);

		while (((i + L[i]) + 1 < N && (i - L[i]) > 0) &&
			      (((i + L[i] + 1) % 2 == 0) ||
			      (text[Math.floor((i + L[i] + 1) / 2)] ==
					  text[Math.floor((i - L[i] - 1) / 2)]))) {
			L[i]++;
		}
		if (L[i] > maxLPSLength) {
			maxLPSLength = L[i];
			maxLPSCenterPosition = i;
		}

		if (i + L[i] > R) {
			C = i;
			R = i + L[i];
		}
	}
		start = (maxLPSCenterPosition - maxLPSLength) / 2;
		end = start + maxLPSLength - 1;
		console.log(`LPS of string is ${text}: `);
		for (i = start; i <= end; i++) {
			console.log(text[i]);
		}
}


stringText = "abba";

findLongestPalindromicString(stringText);









