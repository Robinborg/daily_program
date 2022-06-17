

const arithmeticProgression = (n, lim) => 
	Array.from({ length: Math.ceil(lim / n) }, (_, i) => (i + 1) * n );


console.log(arithmeticProgression(5, 25));
