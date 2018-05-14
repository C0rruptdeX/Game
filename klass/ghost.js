function Ghost(x,y) {

	this.position = createVector(x, y);
	this.velocity = createVector(0, 0);


	this.size = 20;
	this.color = color(187,255,255);

	this.visible = false;

	this.hasBox = false;
	this.yourBoxIndex = null;

	this.move = function(direction)  {
		var newVelocity = createVector(0, 0);

		if (keyIsDown(UP_ARROW)) {
        newVelocity.y -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        newVelocity.y += 3;
    }
    if (keyIsDown(LEFT_ARROW)) {
        newVelocity.x -= 3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        newVelocity.x += 3;
    }

		this.velocity.lerp(newVelocity, 1);
    this.position.add(this.velocity);

	}

	this.update = function() {
		this.move();

		if(this.hasBox) {
				this.dragBox();
		}
	}

	this.dragBox = function() {
		game.level.boxes[this.yourBoxIndex].position.set(this.position.x - 20 , this.position.y - 20);
	}

	this.render = function() {

		push();
		fill(this.color);
		translate(this.position.x, this.position.y);
		var direction = createVector(mouseX - width/2, mouseY - height/ 2);
		rotate(direction.heading());
		rectMode(CENTER);
		ellipse(0, 0, this.size, this.size);
		pop();
	}

}
