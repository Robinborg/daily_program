

class Stack {
	constructor() {
		this.items = [];
	}
	push(item) {
		this.items.unshift(item)
	}
	pop(item) {
		return this.items.shift();
	}
	peek(item) {
		return this.items[0];
	}
	isEmpty(item) {
		return this.items.length === 0;
	}
}

const stack = new Stack();
stack.push("Beef");
stack.push("Mutton");
stack.push("Venison");
console.log(stack.isEmpty());
console.log("---------------");
console.log(stack.peek());
console.log("---------------");
console.log(stack.pop());
console.log("---------------");
console.log(stack.pop());
console.log("---------------");
console.log(stack.pop());
console.log("---------------");
console.log(stack.isEmpty());
