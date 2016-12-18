'use strict';

function load(callback) {
	async
		.series([
			load_textures, load_maps
		], function(error, assets) {
			callback(assets[0].resources, assets[1])
		});
}

function load_textures(callback) {
	PIXI
		.loader
		.add('points/player1', 'assets/textures/capture_points/capture_point_blue.png')
		.add('points/player2', 'assets/textures/capture_points/capture_point_red.png')
		.add('points/neutral', 'assets/textures/capture_points/capture_point_neutral.png')
		.load((loader, resources) => callback(null, resources));
}

function load_maps(callback) {
	//load maps
	const maps = [
		{
			points: [
				{
					player: 'player2',
					capacity: 50,
					initial_resources: 10
				}
			]
		}
	]

	callback(null, maps);
}

module.exports = {
	load
}
