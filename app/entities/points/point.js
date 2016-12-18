'use strict';

function Point(sprite, data) {
	//sprites
	this.sprite = sprite;
	this.point_sprite = sprite.getChildAt(0);
	this.text_sprite = sprite.getChildAt(1);

	//data
	this.x = data.x;
	this.y = data.y;
	this.capacity = data.capacity;
	this.resources = data.initial_resources;
}

Point.prototype.update = function() {
	//update state
	this.resources = Math.min(this.capacity, this.resources + (0.02))

	//update sprite/s
	this.sprite.x = this.x;
	this.sprite.y = this.y;

	this.text_sprite.text = Math.floor(this.resources);
}

module.exports = {
	Point
}
