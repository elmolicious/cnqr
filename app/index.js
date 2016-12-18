'use strict';

//Globally load dependencies
const _ = require('lodash');
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

function setup() {
	renderer = PIXI.autoDetectRenderer(300, 300);

	document
		.body
		.appendChild(renderer.view);

	stage = new Container();

	points.add(stage, {
		player: 'player2',
		capacity: 50,
		initial_resources: 10
	})

	gameLoop();
}

function gameLoop() {

	//Loop this function 60 times per second
	requestAnimationFrame(gameLoop);

	points.update();

	//Render the stage
	renderer.render(stage);
}
