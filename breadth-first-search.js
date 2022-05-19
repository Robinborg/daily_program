
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Tree {
	constructor(root = null) {
		this.root = root;
		this.left = null;
		this.right = null
	}
}

oneNode = new Node(1);
twoNode = new Node(2);
threeNode = new Node(3);
fourNode = new Node(4);

theTree = Tree.root = oneNode;
theTree.left = twoNode;
theTree.right = threeNode;
theTree.left.left = fourNode;


function breadthFirst(root) {
	const result = [];
	const queue = [root];
	while (queue.length > 0 ) {
		const current = queue.shift();
		console.log(current);
		result.push(current.value);
		if (current.left) {
			queue.push(current.left)
		}
		if (current.right) {
			queue.push(current.right)
		}
	}
	return result;
}

console.log(theTree);

console.log(breadthFirst(theTree));
