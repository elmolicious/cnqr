'use strict';

const fs = require('fs');

const map_path = './app/assets/maps/';

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
		.add('points/player1', 'assets/textures/points/point_blue.png')
		.add('points/player2', 'assets/textures/points/point_red.png')
		.add('points/neutral', 'assets/textures/points/point_neutral.png')
		.add('connection', 'assets/textures/connections/connection.png')
		.load((loader, resources) => callback(null, resources));
}

function load_maps(callback) {
	const map_files = fs.readdirSync(map_path);

	const maps = _.map(map_files, mf => require('./maps/' + mf));

	callback(null, maps);

}

module.exports = {
	load
}
