'use strict';

const connections = require('../connections/connections');
const Point = require('./point').Point;

let points = [];

function add(scene, data) {
	//creating all sprites
	const point_container = new Container();
	const point_sprite = new Sprite(resources[`points/${data.player}`].texture);
	const point_text = new Text("Capture Point", {
		fontFamily: "Arial",
		fontSize: 10,
		fill: "black"
	});

	//adding sprites to the container
	point_container.addChild(point_sprite);
	point_container.addChild(point_text);

	//creating the point
	const point = new Point(point_container, data)

	point_text.x = 26;
	point_text.y = 26;

	point_sprite.interactive = true;

	points.push(point);

	point_sprite
		.on('mousedown', onDragStart.bind(point))
		.on('mouseup', onDragEnd.bind({point, scene}))

	scene.addChild(point_container);
}

function update() {
	_.each(points, p => p.update());
}

module.exports = {
	add,
	update
}

function onDragStart(event) {
	if (this.player !== 'player1')
		return;

	event.starting_point = this;
};

function onDragEnd(event) {
	if (!event.starting_point) {
		alert('no drag start detected');
	}

	if (this.id === event.starting_point.id)
		return;

	event.ending_point = this.point;

	connections.add(this.scene, {
		source: event.starting_point,
		target: event.ending_point
	})
};
