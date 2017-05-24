/**
 * 
 */

module.exports = LinkedList;
var Node = require('./Node.js');

function LinkedList() {
	
	this.head = null;
	this.push = push;
	this.toString = toString;
}

function push(data) {
	
	var temp = new Node();
	temp.setData(data);
	
	if(this.head == null) this.head = temp;
	else {
		var cur = this.head;
		while(cur.link != null) cur = cur.link;
		cur.link = temp;
	}
}

function toString() {
	
	for(var cur = this.head; cur != null; cur = cur.link) console.log(cur.getData());
}
