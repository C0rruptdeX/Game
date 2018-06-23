







function collRR(width1, height1, position1, width2, height2, position2) {
	if(position1.x < position2.x + width2 && position1.x + width1 > position2.x) {
		if(position1.y < position2.y + height2 && position1.y + height1 > position2.y) {
			return true;
		}
	}
}

function collEE(radios1, position1, radios2 , position2) {
	var distance = sqrt(pow(abs(position1.x-position2.x),2)+pow(abs(position1.y-position2.y),2));
	if(distance < (radios1/1+radios2/2)) {
		return true;
	}
}

function collRE(width, height, position1, radios2, position2) {
	if(position2.x+radios2 / 2 > position1.x && position2.x-radios2 / 2 < position1.x + width ) {
		if(position2.y + radios2/2 > position1.y && position2.y - radios2/2 < position1.y + height) {
			return true;
		}
	}
}

function resetP_R(width, height, position1, radios2, position2) {
	var newVelocity2 = createVector(0, 0);

	if (position1.y < position2.y + radios2 && position1.y + height > position2.y - radios2 && position2.x + radios2/2 -5  < position1.x) {
			newVelocity2.x -= 4.001;
	}
	if (position1.y < position2.y + radios2 && position1.y + height > position2.y - radios2  && position2.x > position1.x + width ) {
			newVelocity2.x -= -4.001;
	}
	if (position1.x < position2.x + radios2 && position1.x + width - 5> position2.x - radios2 && position2.y > position1.y + height ) {
			newVelocity2.y -= -4.001;
	}
	if (position1.x < position2.x + radios2 && position1.x + width > position2.x - radios2 && position2.y + radios2/2 - 5 < position1.y ) {
			newVelocity2.y -= 4.001;
	}

	if(!game.player.isDead) {
		game.player.position.add(newVelocity2);
		if(game.player.hasBox) {
			game.level.boxes[game.player.yourBoxIndex].position.add(newVelocity2);
		} else if(game.player.hasUm) {
			game.level.umleiter[game.player.yourUmIndex].position.add(newVelocity2);
		} else if(game.player.hasBlock) {
			game.level.blocks[game.player.yourBlockIndex].position.add(newVelocity2);
		}
	}

}

function resetP() {
	var newVelocity2 = createVector(0, 0);

	if (keyIsDown(87)) {
			newVelocity2.y -= -4.001;
	}
	if (keyIsDown(83)) {
			newVelocity2.y += -4.001;
	}
	if (keyIsDown(65)) {
			newVelocity2.x -= -4.001;
	}
	if (keyIsDown(68)) {
			newVelocity2.x += -4.001;
	}

	if(!game.player.isDead) {
		game.player.position.add(newVelocity2);
		if(game.player.hasBox) {
			game.level.boxes[game.player.yourBoxIndex].position.add(newVelocity2);
		} else if(game.player.hasUm) {
			game.level.umleiter[game.player.yourUmIndex].position.add(newVelocity2);
		} else if(game.player.hasBlock) {
			game.level.blocks[game.player.yourBlockIndex].position.add(newVelocity2);
		}
	}

}

function resetG(direction) {
	var newVelocity2 = createVector(0, 0);

	if (keyIsDown(UP_ARROW)) {
					newVelocity2.y -= -3.001;
			}
			if (keyIsDown(DOWN_ARROW)) {
					newVelocity2.y += -3.001;
			}
			if (keyIsDown(LEFT_ARROW)) {
					newVelocity2.x -= -3.001;
			}
			if (keyIsDown(RIGHT_ARROW)) {
					newVelocity2.x += -3.001;
			}

	game.ghost.position.add(newVelocity2);

	if(game.ghost.hasBox) {
		game.level.boxes[game.ghost.yourBoxIndex].position.add(newVelocity2)
	}
}
