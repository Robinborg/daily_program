

const powerset = nums => 
	nums.reduce((p, q) => p.concat(p.map(r => r.concat(q))), [[]]);


console.log(powerset([1, 2, 3]));
