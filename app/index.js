var PIXI = require('pixi.js');

//var renderer = PIXI.autoDetectRenderer(window.height, window.width);
var renderer = PIXI.autoDetectRenderer(300, 300);

document
	.body
	.appendChild(renderer.view);

var stage = new PIXI.Container();

renderer.render(stage);
