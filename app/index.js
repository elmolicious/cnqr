const PIXI = require('pixi.js');

const Container = PIXI.Container;
const loader = PIXI.loader;
const resources = PIXI.loader.resources;
const Sprite = PIXI.Sprite;

let renderer;
let stage;

let capture_point;

loader
	.add(["assets/capture_points/capture_point_blue.png", "assets/capture_points/capture_point_red.png", "assets/capture_points/capture_point_neutral.png"])
	.load(setup);

function setup() {
	renderer = PIXI.autoDetectRenderer(300, 300);

	document
		.body
		.appendChild(renderer.view);

	stage = new Container();

	capture_point = new Sprite(resources["assets/capture_points/capture_point_blue.png"].texture);
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
