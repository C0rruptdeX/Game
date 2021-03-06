
// #################### Fallen ######################

function Speer_box(x,y, t,r) {

	this.position = createVector(x,y);
	this.SPAWN_TIME = t;
  this.time = 0;
	this.rotation = r;
	this.velocity = createVector(0,0);

	this.off_set = createVector(0,0);

  this.getVelocity = function() {
    if(this.rotation == 0) {
			var velocity = createVector(3,0);
			this.off_set = createVector(16,5);
			return velocity;

    }else if(this.rotation == 1) {
			var velocity = createVector(0,-3);
			this.off_set = createVector(5,2);
			return velocity;

		}else if(this.rotation == 2) {
			var velocity = createVector(-3,0);
			this.off_set = createVector(2,5);
			return velocity;

		}else if(this.rotation == 3) {
			var velocity = createVector(0,3);
			this.off_set = createVector(5,16);
			return velocity;
		}
  }

	this.velocity = this.getVelocity();

	this.update = function() {
    this.spawn();
		this.collide();
	}

	this.collide = function() {
		if(collRE(20, 20, this.position, game.player.size, game.player.position)){
			resetP();
		}
	}

  this.spawn = function () {
    this.time += 1;

    if(this.time == this.SPAWN_TIME) {
			game.level.speers.push(new Speer(this.position.x+this.off_set.x, this.position.y+this.off_set.y, this.velocity));
			this.time = 0;
    }
  }

	this.render = function() {

		push();
		fill(128,128,0);
		rect(this.position.x, this.position.y, 20, 20);
		pop();

		push();
		fill(108,108,0);
		rect(this.position.x+this.off_set.x, this.position.y+this.off_set.y, 5, 5);
		pop();

	}
}

//--------- speer

function Speer(x,y, v) {

	this.position = createVector(x,y);
  this.velocity = v;

	this.time_lived = 0;
	this.TIME_TO_LIVE = 2100;

	this.breakTime = 10;

	this.update = function() {
		this.collide();
    this.move();
	}

	this.collide = function() {

		if(collRE(10, 10, this.position, game.player.size, game.player.position)){
      console.log("du bist tot! lol");
      game.player.isDead = true;

      game.level.speers.splice(game.level.speers.indexOf(this),1);
		}else {
			var stop = false;
			var i = 0;

			while(i < game.level.walls.length && !stop) {
				if(collRR(game.level.walls[i].width, game.level.walls[i].height, game.level.walls[i].position, 10,10, this.position)) {
					game.level.speers.splice(game.level.speers.indexOf(this),1);
					stop = true;
				}
				i++;
			}
			i = 0;

			while(i < game.level.boxes.length && !stop) {
				if(collRR(game.level.boxes[i].width, game.level.boxes[i].height, game.level.boxes[i].position, 10,10, this.position)) {
					game.level.speers.splice(game.level.speers.indexOf(this),1);
					if(i == game.ghost.yourBoxIndex) {
						game.ghost.yourBoxIndex = null;
						game.ghost.hasBox = false;
					}else if(i == game.player.yourBoxIndex) {
						game.player.yourBoxIndex = null;
						game.player.hasBox = false;
					}
					game.level.boxes.splice(i,1);
					stop = true;
				}
				i++;
			}
			i = 0;

			while(i < game.level.umleiter.length && !stop && this.breakTime==0) {
				if(collRR(20, 20, game.level.umleiter[i].position, 10, 10, this.position)) {
					this.velocity = game.level.umleiter[i].velocity;
					this.position.set(game.level.umleiter[i].position.x+game.level.umleiter[i].off_set.x,game.level.umleiter[i].position.y+game.level.umleiter[i].off_set.y);
					this.breakTime = 2;
					stop = true;
				}
				i++;
			}
			i = 0;

			while(i < game.level.activator.length && !stop ) {
				if(collRR(20, 20, game.level.activator[i].position, 10, 10, this.position)) {
					game.level.speers.splice(game.level.speers.indexOf(this),1);
					game.level.activator[i].gotHit_thing();
					stop = true;
				}
				i++;
			}
			i = 0;

			while(i < game.level.blocks.length && !stop) {
				if(collRR(game.level.blocks[i].width, game.level.blocks[i].height, game.level.blocks[i].position, 10,10, this.position)) {
					game.level.speers.splice(game.level.speers.indexOf(this),1);
					 if(i == game.player.yourBlockIndex) {
						game.player.yourBlockIndex = null;
						game.player.hasBlock = false;
					}
					stop = true;
				}
				i++;
			}
			i = 0;
			if(!stop && this.breakTime>0) {
				this.breakTime--;
			}

    }

	}

	this.move = function(direction)  {
		this.position.add(this.velocity);
		this.time_lived++;
		if(this.time_lived > this.TIME_TO_LIVE){
			game.level.speers.splice(game.level.speers.indexOf(this),1);
		}
	}

	this.render = function() {
		push();
		fill(102, 102, 153);
		rect(this.position.x, this.position.y, 10, 10);
		pop();

	}
}

// -----------------  umleiter ???????  -----------------

function Umleiter(x,y, r) {

	this.position = createVector(x,y);
	this.rotation = r;
	this.velocity = createVector(0,0);

	this.off_set = createVector(0,0);

  this.getVelocity = function() {
    if(this.rotation == 0) {
			var velocity = createVector(3,0);
			this.off_set = createVector(16,5);
			this.velocity = velocity;

    }else if(this.rotation == 1) {
			var velocity = createVector(0,-3);
			this.off_set = createVector(5, -2);
			this.velocity = velocity;

		}else if(this.rotation == 2) {
			var velocity = createVector(-3,0);
			this.off_set = createVector(-2,5);
			this.velocity = velocity;

		}else if(this.rotation == 3) {
			var velocity = createVector(0,3);
			this.off_set = createVector(5,16);
			this.velocity = velocity;
		}
  }

	this.update = function() {
		if(!game.player.hasUm) {
			this.collide();
		}else if(game.level.umleiter.indexOf(this) != game.player.yourUmIndex) {
			this.collide();
		}
	}

	this.collide = function() {
		if(collRE(20, 20, this.position, game.player.size, game.player.position)){
			resetP();
		}
	}

	this.render = function() {

		push();
		fill(108,108,0);
		rect(this.position.x, this.position.y, 20, 20);
		pop();

		push();
		fill(128,128,0);
		rect(this.position.x+this.off_set.x, this.position.y+this.off_set.y, 5, 5);
		pop();

	}
}

// --------------- activator ---------------

function Activator(x,y, use,what) {

	this.position = createVector(x,y);
	this.width = 20+1;
	this.height = 20+1;

	this.use = use;
	this.what_number = what;

	this.isOn = false;

	this.update = function() {
		this.collide();
	}

	this.collide = function() {

		if(collRE(this.width, this.height, this.position, game.player.size, game.player.position)){
			resetP();
		}

	}

	this.gotHit_thing = function() {
		if(!this.isOn && this.use == 1) {
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

			if(!this.isOn){
				if(it == -1) {
					console.log("lol fehler");
				}else {
					game.level.level[it].isOpen = true;
					this.isOn = true;
				}

			}else if(this.isOn) {
				game.level.level[it].isOpen = false;
				this.isOn = false;
			}
		}
	}

	this.getIT = function() {
		var stop_serch = false;
		var i = 0;

		while(!stop_serch && i < game.level.level.length) {

			if(game.level.level[i].what_number == this.what_number) {
				stop_serch = true;
				return i;
			}
			i++;
		}
		return -1;

	}

	this.render = function() {

		push();
		strokeWeight(1);
		stroke(100);
		fill(155,151,151);
		rect(this.position.x, this.position.y, this.width, this.height);
		pop();
		push();
		fill(155,40,9);
		ellipse(this.position.x+this.width/2, this.position.y+this.width/2, this.width/1.5);
		pop();

	}
}

// #################   Kiste   ##################

function Box(x,y) {

	this.position = createVector(x,y);
	this.width = 40+1;
	this.height = 40+1;
	this.velocity2 = createVector(0,0);

	this.update = function() {
		if(game.level.boxes.indexOf(this) != game.player.yourBoxIndex) {
			this.collide();
		}
	}

	this.collide = function() {
		if(collRE(this.width, this.height, this.position, game.player.size, game.player.position)){
			resetP();
		}
	}

	this.render = function() {
		push();
		fill(139,69,19);
		rect(this.position.x, this.position.y, this.width, this.height);
		pop();

	}
}

function Block(x,y) {

	this.position = createVector(x,y);
	this.width = 40+1;
	this.height = 40+1;
	this.velocity2 = createVector(0,0);

	this.update = function() {
		if(game.level.blocks.indexOf(this) != game.player.yourBlockIndex) {
			this.collide();
		}
	}

	this.collide = function() {
		if(collRE(this.width, this.height, this.position, game.player.size, game.player.position)){
			resetP();
		}
	}

	this.render = function() {
		push();
		fill(73, 81, 67);
		rect(this.position.x, this.position.y, this.width, this.height);
		pop();

	}
}

// #########################################   Teleporter   ####################

// player    103, 255, 118
// box       107,142,35


function TeleporterP(x,y,  lx,ly) {

	this.position = createVector(x,y);
	this.landOn = createVector(lx,ly);
	this.width = 30+1;
	this.coolDown = 0;

	this.update = function() {
		if(this.coolDown == 0) {
			this.collide();
		}else {
			this.coolDown--;
		}

	}

	this.collide = function() {
		if(collEE(this.width-25, this.position, game.player.size, game.player.position)){
			if(game.player.hasBox || game.player.hasUm) {
				game.player.yourBoxIndex = null;
				game.player.hasBox = false;

				game.player.yourUmIndex = null;
				game.player.hasUm = false;
			}
			game.player.position.set(this.landOn);
			this.coolDown = 180;
		}
	}

	this.render = function() {
		push();
		strokeWeight(4);
		stroke(150);
		fill(178, 102, 255);
		ellipse(this.position.x, this.position.y, this.width);
		pop();

		push();
		fill(51, 0, 102);
		ellipse(this.landOn.x, this.landOn.y, this.width-5);
		pop();
	}
}


function TeleporterB(x,y,  lx,ly) {

	this.position = createVector(x,y);
	this.landOnBox = createVector((lx),(ly));
	this.width = 30+1;
	this.coolDown = 0;

	this.update = function() {
		if(this.coolDown == 0) {
			this.collide();
		}else {
			this.coolDown--;
		}
	}

	this.collide = function() {
		var stop = false;
		var i = 0;

		while(i < game.level.boxes.length && !stop ) {
			if(collRE(41, 41, game.level.boxes[i].position, this.width-25, this.position)){

				if(game.player.yourBoxIndex == i) {
					game.player.yourBoxIndex = null;
					game.player.hasBox = false;
				}else if(game.ghost.yourBoxIndex == i) {
					game.ghost.yourBoxIndex = null;
					game.ghost.hasBox = false;
				}
				game.level.boxes[i].position.set(this.landOnBox);
				this.coolDown = 180;
				stop = true;
			}
			i++;
		}
	}

	this.render = function() {
		push();
		strokeWeight(4);
		stroke(151,151,151);
		fill(107,142,35);
		ellipse(this.position.x, this.position.y, this.width);
		pop();

		push();
		fill(77,112,5);
		ellipse(this.landOnBox.x+20, this.landOnBox.y+20, this.width-5);
		pop();
	}
}


// ##############################################   Trap_stown ########################

function DropStone(x,y) {

	this.position = createVector(x,y);
	this.width = 40+1;

	this.isDown = false;
	this.renderDown = false;
	this.drop = false;
	this.coolDown = 90;

	this.update = function() {
		if(this.isDown) {
			this.collide();
		}else if(!this.isDown && !this.drop) {
			this.underIt();
		}else if(!this.isDown && this.drop && this.coolDown > 0) {
			this.coolDown--;
		}else if(!this.isDown && this.drop && this.coolDown == 0) {
			if(collEE(this.width/2, this.position, game.player.size, game.player.position)){
				if(!game.player.hasBox) {
					game.player.isDead = true;
					this.isDown = true;
					this.drop = false;
					this.renderDown = true;
				}else {
					this.isDown = false;
					this.drop = true;
					this.renderDown = true;
				}
			}else{
				this.isDown = true;
				this.drop = false;
				this.renderDown = true;
			}
		}

	}

	this.underIt = function() {
		if(collEE(this.width-20, this.position, game.player.size, game.player.position)){
			this.drop = true;
		}
	}

	this.collide = function() {
		if(collEE(this.width/2, this.position, game.player.size, game.player.position)){
			resetP();
		}
	}

	this.render = function() {

		if(!this.renderDown) {
			push();
			fill(181,181,181);
			ellipse(this.position.x, this.position.y, this.width);
			pop();
		}else {
			push();
			fill(64,64,64);
			ellipse(this.position.x, this.position.y, this.width);
			pop();
		}

	}
}
