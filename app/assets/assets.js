'use strict';

var loader = PIXI.loader;

function load(callback) {
	loader
		.add('points/player1', 'assets/capture_points/capture_point_blue.png')
		.add('points/player2', 'assets/capture_points/capture_point_red.png')
		.add('points/neutral', 'assets/capture_points/capture_point_neutral.png')
		.load(callback);
}

module.exports = {
	load
}
