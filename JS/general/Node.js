/**
 * 
 */

function Node() {
	
	this.data = undefined;
	this.link = null;
	
	this.getData = function() {
		return this.data;
	}
	
	this.setData = function(data) {
		this.data = data;
	}
}