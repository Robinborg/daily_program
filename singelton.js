

const singelton = (className) => {
	return new Proxy(className.prototype.constructor, {
		instance: null,
		construct: (target, argumentList) => {
			if (!this.instance) 
				this.instance = new target(...argumentList);
			return this.instance;
		}
	})
};

class someClass {
	constructor(msg) {
		this.msg = msg;
	}
	printMsg() {
		console.log(this.msg)
	}
}

aSomeClass = singelton(someClass);

const anObj = new aSomeClass('First');
anObj.printMsg()
const secondObj = new aSomeClass('Second');
secondObj.printMsg()

