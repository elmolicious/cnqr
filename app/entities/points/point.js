'use strict';

function Point(sprite, data) {
	this.sprite = sprite;

	this.raw_data = data;
}

Point.prototype.update = function() {
	this.sprite.x++;
	this.sprite.y++;
	console.log('updating point');
}

module.exports = {
	Point
}
