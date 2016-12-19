'use strict';

function Connection(sprite, data) {
	//sprites
	this.sprite = sprite;

	//data
	this.source = data.source;
	this.target = data.target;
}

Connection.prototype.update = function() {
	//update state
	if (this.source.resources === 0)
		return;

	this.source.resources = Math.max(0, this.source.resources - this.source.reg_per_sec * 2 / (1000 / delta_time))
	this.target.resources = Math.max(0, this.target.resources - this.target.reg_per_sec * 2 / (1000 / delta_time))

	//update sprite/s
}

module.exports = {
	Connection
}
