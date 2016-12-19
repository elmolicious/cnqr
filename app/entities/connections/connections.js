'use strict';

const Victor = require('victor');

const Connection = require('./connection').Connection;

const RADIUS = 32;

let connections = [];

function add(scene, data) {
	const sprite = new Sprite(resources['connection'].texture);

	const [anchor,
		angle,
		scale] = get_connection_settings(data.source, data.target);

	sprite.x = anchor.x;
	sprite.y = anchor.y;

	sprite.rotation = angle;

	sprite.scale.x = scale;

	const connection = new Connection(sprite, data);

	connections.push(connection);

	scene.addChild(sprite);
}

function update() {
	_.each(connections, c => c.update());
}

function get_connection_settings(source_point, target_point) {
	const offset = new Victor(32, 32);

	let source = new Victor(source_point.x, source_point.y).add(offset);
	let target = new Victor(target_point.x, target_point.y).add(offset);

	const slope = target.subtract(source);
	const normalized_slope = slope
		.clone()
		.normalize();

	//sprite anchor
	const anchor = normalized_slope
		.clone()
		.multiply(offset)
		.add(source)
		.toObject()

	//sprite rotation angle
	const angle = normalized_slope.horizontalAngle()

	//sprite scale factor
	const scale = (slope.magnitude() - 64) / 100;

	return [anchor, angle, scale];
}

module.exports = {
	add,
	update
}
