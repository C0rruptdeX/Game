function keyPressed(){

	if(keyCode == 81) {
		if(game.ghost.visible && game.camSet) {
			game.camSet = false;
		}else if(!game.camSet) {
			game.camSet = true;
		}
	}

	if(keyCode == 71){
		if(!game.ghost.visible){
			game.ghost.visible = true;
			game.ghost.position.set(game.player.position);  //  gegenstand geist folgen
		}else{
			game.ghost.visible = false;
			game.camSet = true;
			game.ghost.hasBox = false;
			game.ghost.yourBoxIndex = null;
		}
	}

	if(keyCode == 69){

		if(!game.player.hasBox && !game.player.hasUm && !game.player.hasBlock) {
			var i = 0;
			var stop = false;

			while(!stop && i < game.level.boxes.length) {
				var distance = sqrt(pow(abs(game.level.boxes[i].width/2+game.level.boxes[i].position.x-game.player.position.x),2)+pow(game.level.boxes[i].width/2+(game.level.boxes[i].position.y-game.player.position.y),2));
				if(distance < 50 && game.ghost.yourBoxIndex != i) {
					game.player.hasBox = true;
					game.player.hasUm = false;
					game.player.hasBlock = false;
					game.player.yourBoxIndex = i;
				}
				i++;
			}
			i = 0;

			while(!stop && i < game.level.umleiter.length) {
				var distance = sqrt(pow(abs(20/2+game.level.umleiter[i].position.x-game.player.position.x),2)+pow(20/2+(game.level.umleiter[i].position.y-game.player.position.y),2));
				if(distance < 45) {
					game.player.hasUm = true;
					game.player.hasBlock = false;
					game.player.yourUmIndex = i;
				}
				i++;
			}
			i =0;

			while(!stop && i < game.level.blocks.length) {
				var distance = sqrt(pow(abs(game.level.blocks[i].width/2+game.level.blocks[i].position.x-game.player.position.x),2)+pow(game.level.blocks[i].width/2+(game.level.blocks[i].position.y-game.player.position.y),2));
				if(distance < 50) {
					game.player.hasBlock = true;
					game.player.yourBlockIndex = i;
				}
				i++;
			}

		}else if(game.player.hasBox || game.player.hasUm || game.player.hasBlock) {
			game.player.hasBox = false;
			game.player.yourBoxIndex = null;

			game.player.hasUm = false;
			game.player.yourUmIndex = null;

			game.player.hasBlock = false;
			game.player.yourBlockIndex = null;

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

	if(keyCode == 16) {
		game.ghost.visible = false;
		game.camSet = true;

		LevelUpDate();
		game.player.key_end = 0;
		game.player.key_steel = 0;
		game.player.hasBox = false;
		game.player.hasUm = false;
		game.player.yourBoxIndex = null;
		game.player.yourUmIndex = null;

		game.player.isDead = false;

	}else if(keyCode == 78) {
		game.level.loadetLevel++;

		game.ghost.visible = false;
		game.camSet = true;

		LevelUpDate();
		game.player.key_end = 0;
		game.player.key_steel = 0;
		game.player.hasBox = false;
		game.player.hasUm = false;
		game.player.yourBoxIndex = null;
		game.player.yourUmIndex = null;

		game.player.isDead = false;

	}

}
