'use strict';

//Globally load dependencies
const _ = require('lodash');
const async = require('async');
const PIXI = require('pixi.js');

//Add shortcuts
const Container = PIXI.Container;
const resources = PIXI.loader.resources;
const Sprite = PIXI.Sprite;
const Text = PIXI.Text;

const assets = require('./assets/assets');
const connections = require('./entities/connections/connections');
const points = require('./entities/points/points');

//Variables used in both setup and the gameloop
let renderer;
let stage;

let last_time = Date.now();
let now = Date.now();
let delta_time;

//Start after loading all assets
assets.load(setup)

function setup(textures, maps) {
	renderer = PIXI.autoDetectRenderer(600, 600);

	renderer.backgroundColor = 0xFFFFFF;

	document
		.body
		.appendChild(renderer.view);

	//create main stage to render
	stage = new Container();
	stage.interactive = false;

	//Initialize all points from a map
	_.each(maps[0].points, p => points.add(stage, p))

	gameLoop();
}

function gameLoop() {
	//Loop this function 60 times per second
	requestAnimationFrame(gameLoop);

	//Calculate Delta time for updates
	last_time = now;
	now = Date.now();
	delta_time = now - last_time;

	//update data

	connections.update();
	points.update();

	//Render the stage
	renderer.render(stage);
}
