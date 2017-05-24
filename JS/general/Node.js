/**
 * 
 */
module.exports = Node;

function Node() {
	
	this.data = undefined;
	this.link = null;
}

Node.prototype.getData = function() {
	return this.data;
}

Node.prototype.setData = function(data) {
	this.data = data;
}