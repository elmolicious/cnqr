'use strict';

function start(event) {
	if (this.player !== 'player1')
		return;

	event.starting_point = this;
};

function end(event) {
	if (!event.starting_point) {
		alert('no drag start detected');
	}

	if (this.id === event.starting_point.id)
		return;

	event.ending_point = this.point;

	connections.add(this.scene, {
		source: event.starting_point,
		target: event.ending_point
	})
};

module.exports = {
	start,
	end
}
