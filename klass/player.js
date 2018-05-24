function Player(x,y) {

	this.position = createVector(x, y);
	this.velocity = createVector(0, 0);
	this.size = 40;

	this.key_end = 0;
	this.key_steel = 0;

	this.hasBox = false;
	this.hasUm = false;
	this.yourBoxIndex = null;
	this.yourUmIndex = null;

	this.isDead = false;
	this.i = 0;

	this.move = function(direction)  {
		var newVelocity = createVector(0, 0);

		if (keyIsDown(87)) {
        newVelocity.y -= 4;
    }
    if (keyIsDown(83)) {
        newVelocity.y += 4;
    }
    if (keyIsDown(65)) {
        newVelocity.x -= 4;
    }
    if (keyIsDown(68)) {
        newVelocity.x += 4;
    }

		this.velocity.lerp(newVelocity, 1);
		this.position.add(this.velocity);
		if(this.hasBox) {
			game.level.boxes[this.yourBoxIndex].position.add(this.velocity);
		}else if(this.hasUm) {
			game.level.umleiter[this.yourUmIndex].position.add(this.velocity);
		}
	}

	this.update = function() {
		if(!this.isDead) {
			this.move();
		}
	}

	this.render = function() {

		if(!this.isDead) {
			push();
			fill(0,0,205);
			translate(this.position.x, this.position.y);
			var direction = createVector(mouseX - width/2, mouseY - height/ 2);
			rotate(direction.heading());
			rectMode(CENTER);
			rect(0, 0, this.size, this.size);
			pop();
		}else {

			push();
			fill(185,10,40);
			translate(this.position.x, this.position.y);
			ellipse(0,0, 20+this.i, 20+this.i);
			pop();

			push();
			fill(0,0,205);
			translate(this.position.x, this.position.y);
			rectMode(CENTER);
			rect(0, 0, this.size, this.size);
			pop();

			if(this.i != 60) {
				this.i++;
			}
		}

	}
}
