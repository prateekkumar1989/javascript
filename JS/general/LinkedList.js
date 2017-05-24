/**
 * 
 */

module.exports = LinkedList;
var Node = require('./Node.js');

function LinkedList() {
	
	this.head = null;
}

LinkedList.prototype.push = function push(data) {
	
	var temp = new Node();
	temp.setData(data);
	
	if(this.head == null) this.head = temp;
	else {
		var cur = this.head;
		while(cur.link != null) cur = cur.link;
		cur.link = temp;
	}
}

LinkedList.prototype.toString = function toString() {
	
	var list = new String();
	for(var cur = this.head; cur != null; cur = cur.link) list = list + cur.getData() + ' ';
	return list;
}
