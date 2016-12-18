'use strict';

const Point = require('./point.js').Point;

let points = [];

function add(scene, data) {
	const point_container = new Container();
	const point_sprite = new Sprite(resources[`points/${data.player}`].texture);
	const point_text = new Text("Capture Point", {
		fontFamily: "Arial",
		fontSize: 10,
		fill: "white"
	});

	point_text.x = 26;
	point_text.y = 26;

	point_container.addChild(point_sprite);
	point_container.addChild(point_text);

	points.push(new Point(point_container, data));

	scene.addChild(point_container);
}

function update() {
	_.each(points, p => p.update());
}

module.exports = {
	add,
	update
}
