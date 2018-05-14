function keyPressed(){
	if(keyCode == 71){
		if(!game.ghost.visible){
			game.ghost.visible = true;
			game.ghost.position.set(game.player.position);  //  gegenstand geist folgen
		}else{
			game.ghost.visible = false;
			game.ghost.hasBox = false;
			game.ghost.yourBoxIndex = null;
		}
	}

	if(keyCode == 69){
		if(!game.player.hasBox) {
			var i = 0;
			var stop = false;

			while(!stop && i < game.level.boxes.length) {
				var distance = sqrt(pow(abs(game.level.boxes[i].width/2+game.level.boxes[i].position.x-game.player.position.x),2)+pow(game.level. boxes[i].width/2+(game.level.boxes[i].position.y-game.player.position.y),2));
				if(distance < 45 && game.ghost.yourBoxIndex != i) {
					game.player.hasBox = true;
					//game.player.position.set(game.level.boxes[i].position.x + 20 , game.level.boxes[i].position.y + 60);
					game.player.yourBoxIndex = i;
				}
				i++;
			}

		}else if(game.player.hasBox) {
			game.player.hasBox = false;
			game.player.yourBoxIndex = null;
		}
	}

	if(keyCode == 70){
		if(game.ghost.visible) {
			if(!game.ghost.hasBox) {
				var i = 0;
				var stop = false;

				while(!stop && i < game.level.boxes.length) {
					var distance = sqrt(pow(abs(game.level.boxes[i].width/2+game.level.boxes[i].position.x-game.ghost.position.x),2)+pow(abs(game.level.boxes[i].width/2+game.level.boxes[i].position.y-game.ghost.position.y),2));
					if(distance < 35 && game.player.yourBoxIndex != i) {
						game.ghost.hasBox = true;
						game.ghost.position.set(game.level.boxes[i].position.x + 20 , game.level.boxes[i].position.y + 20);
						game.ghost.yourBoxIndex = i;
					}
					i++;
				}

			}else if(game.ghost.hasBox) {
				game.ghost.hasBox = false;
				game.ghost.yourBoxIndex = null;
			}
		}
	}


	return false;
}
