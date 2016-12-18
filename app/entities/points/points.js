'use strict';

const Point = require('./point.js').Point;

let points = [];

function add(scene, data) {
	const point_sprite = new Sprite(resources[`points/${data.player}`].texture);

	points.push(new Point(point_sprite, data));

	scene.addChild(point_sprite);
}

function update() {
	_.each(points, p => p.update());
}

module.exports = {
	add,
	update
}
