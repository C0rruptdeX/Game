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

		if(!game.player.hasBox && !game.player.hasUm) {
			var i = 0;
			var stop = false;

			while(!stop && i < game.level.boxes.length) {
				var distance = sqrt(pow(abs(game.level.boxes[i].width/2+game.level.boxes[i].position.x-game.player.position.x),2)+pow(game.level.boxes[i].width/2+(game.level.boxes[i].position.y-game.player.position.y),2));
				if(distance < 45 && game.ghost.yourBoxIndex != i) {
					game.player.hasBox = true;
					game.player.yourBoxIndex = i;
				}
				i++;
			}
			i = 0;

			while(!stop && i < game.level.umleiter.length) {
				var distance = sqrt(pow(abs(20/2+game.level.umleiter[i].position.x-game.player.position.x),2)+pow(20/2+(game.level.umleiter[i].position.y-game.player.position.y),2));
				if(distance < 45) {
					game.player.hasUm = true;
					game.player.yourUmIndex = i;
				}
				i++;
			}

		}else if(game.player.hasBox || game.player.hasUm) {
			game.player.hasBox = false;
			game.player.yourBoxIndex = null;

			game.player.hasUm = false;
			game.player.yourUmIndex = null;

		}
	}

	if(keyCode == 82 && game.player.hasUm) {
		game.level.umleiter[game.player.yourUmIndex].rotation++;
		if(game.level.umleiter[game.player.yourUmIndex].rotation == 4) {
			game.level.umleiter[game.player.yourUmIndex].rotation = 0;
		}
		game.level.umleiter[game.player.yourUmIndex].getVelocity();
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
}
