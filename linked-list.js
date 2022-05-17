

class Node {
	constructor(value) {
	this.value = value;
	this.next = null;
	}
}

class LinkedList {
	constructor(head = null) {
		this.head = head;
	}
	size() {
		let count = 0;
		let node = this.head
		while (node) {
			++count;
			node = node.next;
		}
		return count;
	}
	clear() {
		this.head = null;
	}

	showLinkedList() {
		let node = this.head;
		while(node){
			console.log(node.value);
			node = node.next
		}
	}
}

let node1 = new Node(1);
let node2 = new Node(2);
node1.next = node2

let myLinkedList = new LinkedList(node1);
console.log(myLinkedList.head);
console.log(myLinkedList.size());
myLinkedList.showLinkedList();
