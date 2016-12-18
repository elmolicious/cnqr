'use strict';

const PIXI = require('pixi.js');

const Container = PIXI.Container;
const resources = PIXI.loader.resources;
const Sprite = PIXI.Sprite;

const assets = require('./assets/assets.js');

let renderer;
let stage;

let capture_point;

assets.load(setup)

function setup() {
	renderer = PIXI.autoDetectRenderer(300, 300);

	document
		.body
		.appendChild(renderer.view);

	stage = new Container();

	capture_point = new Sprite(resources['cp_blue'].texture);
	capture_point.x = 0;
	capture_point.y = 0;
	stage.addChild(capture_point);

	gameLoop();
}

function gameLoop() {

	//Loop this function 60 times per second
	requestAnimationFrame(gameLoop);

	capture_point.x++;
	//Move the cat 1 pixel per frame

	//Render the stage
	renderer.render(stage);
}
