

const once = fn => {
	let called = false;
	return function(...args) {
		if (called) return;
		called = true;
		return fn.apply(this, args);
	};
};

const startApp = function(even) {
	console.log(this, event);
};

document.body.addEventListener('click', once(startApp));
