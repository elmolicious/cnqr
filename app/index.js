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
const points = require('./entities/points/points')

//Variables used in both setup and the gameloop
let renderer;
let stage;

//Start after loading all assets
assets.load(setup)

function setup(textures, maps) {
	renderer = PIXI.autoDetectRenderer(300, 300);

	document
		.body
		.appendChild(renderer.view);

	//create main stage to render
	stage = new Container();

	//Initialize all points from a map
	_.each(maps[0].points, p => points.add(stage, p))

	gameLoop();
}

function gameLoop() {

	//Loop this function 60 times per second
	requestAnimationFrame(gameLoop);

	points.update();

	//Render the stage
	renderer.render(stage);
}
