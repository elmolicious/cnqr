'use strict';

const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let window;

app.on('ready', create_game_window);

function create_game_window() {
	window = new BrowserWindow({width: 1600, height: 900})

	window.loadURL(url.format({
		pathname: path.join(__dirname, 'app', 'index.html'),
		protocol: 'file:',
		slashes: true
	}));

	window
		.webContents
		.openDevTools()

	window.on('closed', () => {
		console.log('Window closed');
		window = null
	});
}
