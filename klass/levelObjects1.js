// ##################  floor +###########################

function Floor(x,y, w,h) {

	this.position = createVector(x,y);
	this.width = w;
	this.height = h;

	this.update = function() {
	}

	this.render = function() {

		push();
		fill(205,205,205);
		rect(this.position.x, this.position.y, this.width, this.height);
		pop();

	}
}

/*    ####################   Wall / Stone   ###############    */

function Wall(x,y, w,h) {

	this.position = createVector(x,y);
	this.width = w+1;
	this.height = h+1;

	this.update = function() {
		this.collide();
	}

	this.collide = function() {

		if(collRE(this.width, this.height, this.position, game.player.size, game.player.position)){
			resetP();
		}
		if(!game.ghost.visible){
		}else if(collRE(this.width, this.height, this.position, game.ghost.size, game.ghost.position)){
			resetG();
		}

	}

	this.render = function() {

		push();
		fill(69,69,69);
		rect(this.position.x, this.position.y, this.width, this.height);
		pop();

	}
}


/*				##########################     Magie    ####################    */

function Magie(x,y, w,h) {

	this.position = createVector(x,y);
	this.width = w+1;
	this.height = h+1;

	this.update = function() {
		this.collide();
	}

	this.collide = function() {

		if(!game.ghost.visible){
		}else if(collRE(this.width, this.height, this.position, game.ghost.size, game.ghost.position)){
			game.ghost.visible = false;
			game.camSet = true;
			game.ghost.hasBox = false;
			game.ghost.yourBoxIndex = null;
		}

	}

	this.render = function() {

		push();
		strokeWeight(1);
		stroke(255, 163, 207);
		noFill();
		rect(this.position.x, this.position.y, this.width, this.height);
		pop();

	}
}

/*       ##########################     Key     #######################       */


function Key_End(x, y) {

	this.position = createVector(x, y );
	this.width = 10;
	this.height = 15;


	this.update = function() {
		this.collide();
	}

	this.collide = function() {

		if(collRE(this.width, this.height, this.position, game.player.size, game.player.position)){

			game.player.key_end +=1;
			game.level.level.splice(game.level.level.indexOf(this),1);
		}

	}

	this.render = function() {

		push();
		fill(238,173,14);
		rect(this.position.x, this.position.y, this.width, this.height);
		pop();

	}

}

// ----- Key_steel     #####################################

function Key_Steel(x, y) {

	this.position = createVector(x, y );
	this.width = 10;
	this.height = 15;

	this.update = function() {
		this.collide();
	}

	this.collide = function() {
		if(collRE(this.width, this.height, this.position, game.player.size, game.player.position)){
			game.player.key_steel +=1;
			game.level.level.splice(game.level.level.indexOf(this),1);
		}
	}

	this.render = function() {

		push();
		fill(150,150,150);
		rect(this.position.x, this.position.y, this.width, this.height);
		pop();

	}

}


/*       ##########################     Door     #######################       */

// ----- End

function Door_End(x,y, w,h) {

	this.position = createVector(x,y);
	this.width = w+1;
	this.height = h+1;

	this.update = function() {
		this.collide();
	}

	this.collide = function() {

		if(collRE(this.width, this.height, this.position, game.player.size, game.player.position)){

			resetP();

			if(game.player.key_end > 0) {
				game.player.key_end -= 1;

				game.level.loadetLevel++;
				LevelUpDate();
			}
		}
	}

	this.render = function() {

		push();
		fill(139,69,19);
		rect(this.position.x, this.position.y, this.width, this.height);
		pop();

	}
}

// ---- Door_Steel     ############################################

function Door_Steel(x,y, w,h, use,what) {

	this.position = createVector(x,y);
	this.width = w+1;
	this.height = h+1;

	this.use = use;
	this.what_number = what;

	this.isOpen = false;

	this.update = function() {
		this.collide();
	}

	this.collide = function() {

		if(collRE(this.width, this.height, this.position, game.player.size, game.player.position) && !this.Open){

			if(!this.isOpen) {
				resetP();
			}

			if(this.use == 1 && game.player.key_steel > 0) {
				game.player.key_steel -= 1;

				this.isOpen = true;
			}else {

			}

		}

	}

	this.render = function() {

		if(!this.isOpen) {
			push();
			fill(155,151,151);
			rect(this.position.x, this.position.y, this.width, this.height);
			pop();
		}else{
			push();
			fill(105,101,101);
			rect(this.position.x, this.position.y, this.width, this.height);
			pop();
		}


	}
}

/* ____ hard_old_wood_door ###########	*/

function Door_hard(x,y, w,h, use) {

	this.position = createVector(x,y);
	this.width = w+1;
	this.height = h+1;

	this.use = use;

	this.isOpen = false;

	this.update = function() {
		if(!this.isOpen) {
			this.collide();
		}
	}

	this.collide = function() {

		if(collRE(this.width, this.height, this.position, game.player.size, game.player.position)){

			if(this.use == 1 && game.player.key_steel > 0) {
				game.player.key_steel -= 1;

				this.isOpen = true;
			}
			resetP();
		}else if(game.ghost.visible) {
			if(collRE(this.width, this.height, this.position, game.ghost.size, game.ghost.position) && game.ghost.hasBox) {
				resetG();
			}
		}

	}

	this.render = function() {

		if(!this.isOpen) {
			push();
			fill(61, 42, 23);
			rect(this.position.x, this.position.y, this.width, this.height);
			pop();
		}else{
			push();
			fill(35, 23, 11);
			rect(this.position.x, this.position.y, this.width, this.height);
			pop();
		}


	}
}

/*    ###########################   Button  #######################*/

function Button(x,y, use,what) {

	this.position = createVector(x,y);
	this.width = 30+1;
	this.height = 30+1;

	this.use = use;
	this.what_number = what;

	this.isPressed = false;
	this.isOn = false;


	this.update = function() {
		this.collide();
	}

	this.collide = function() {

		if(collRE(this.width, this.height, this.position, game.player.size, game.player.position)){
			this.button_prest_thing();
		}else if(this.getIfBoxOnIt()){
			this.button_prest_thing();
		}else{
			if(this.use == 3 && !this.isOn && this.isPressed) {
				game.level.level[this.door_store].isOpen = false;
				this.isPressed = false;
			}
			this.isOn = false;
		}

	}

	this.getIfBoxOnIt = function() {
		var stop = false;
		var i = 0;
		var betterPos = createVector(this.position.x+15, this.position.y+15);

		while(i < game.level.boxes.length && !stop) {
			if(collRE(game.level.boxes[i].width, game.level.boxes[i].height, game.level.boxes[i].position, 30, betterPos)) {
				return true;
				stop = true;
			}
			i++;
		}

	}

	this.button_prest_thing = function() {
		if(!this.isPressed && this.use == 1) {
			var it = 0;
			it = this.getIT();

			if(it == -1) {
				console.log("lol fehler");
			}else {
				game.level.level[it].isOpen = true;
			}

		}else if(this.use == 2){
			var it = 0;
			it = this.getIT();

			if(!this.isPressed && !this.isOn){
				if(it == -1) {
					console.log("lol fehler");
				}else {
					game.level.level[it].isOpen = true;
					this.isPressed = true;
					this.isOn = true;
				}

			}else if(this.isPressed && !this.isOn) {
				game.level.level[it].isOpen = false;
				this.isOn = true;
				this.isPressed = false;
			}

		}else if(this.use == 3) {
			this.door_store = this.getIT();

			if(!this.isPressed && !this.isOn){

				if(this.door_store == -1) {
					console.log("lol fehler");
				}else {
					game.level.level[this.door_store].isOpen = true;
					this.isPressed = true;
					this.isOn = true;
				}
			}
		}

	}

	this.getIT = function() {
		var stop_serch = false;
		var i = 0;

		while(!stop_serch && i < game.level.level.length) {

			if(game.level.level[i].what_number == this.what_number && game.level.level[i] != this) {
				stop_serch = true;
				return i;
			}
			i++;
		}
		return -1;

	}

	this.render = function() {

		push();
		fill(155,151,151);
		rect(this.position.x, this.position.y, this.width, this.height);
		pop();

	}
}
