'use strict';

var loader = PIXI.loader;

function load(callback) {
	loader
		.add('cp_blue', 'assets/capture_points/capture_point_blue.png')
		.add('cp_red', 'assets/capture_points/capture_point_blue.png')
		.add('cp_neutral', 'assets/capture_points/capture_point_blue.png')
		.load(callback);
}

module.exports = {
	load
}
