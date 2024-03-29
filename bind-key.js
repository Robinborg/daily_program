const bindKey = (context, fn, ...boundArgs) => (...args) =>
	  context[fn].apply(context, [...boundArgs, ...args]);

const freddy = {
	  user: 'fred',
	  greet: function(greeting, punctuation) {
			    return greeting + ' ' + this.user + punctuation;
			  }
};
const freddyBound = bindKey(freddy, 'greet');
console.log(freddyBound('hi', '!')); 
