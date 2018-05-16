function LevelLoader(x,y) {

	this.position = createVector(x,y);
	var j = 0;
	this.loadetLevel = 0;
	this.help = 0;

	this.atStart = false;

	//    x l/r , y u/d , w , h

	this.walls_info_ =  [4500, 5000, 300, 20,  4500, 5000, 20, 300,   4780, 4850, 20, 150,   4900, 4850, 20, 150,
						4780, 4700, 20, 150,  4900, 4700, 20, 150,   4800, 4700, 120, 20,   4900, 5000, 20, 150,
						4900, 4900, 150, 20,  5100, 5000, 20, 150,   5100, 4900, 20, 150,   4950, 4900, 150, 20,
						4850, 4900, 150, 20,  4900, 5100, 130, 20,   5100, 5130, 20, 130,   5000, 5180, 120, 20,
						5100, 5200, 20, 150,  4900, 5130, 20, 150,   4900, 5260, 130, 20,   4980, 5350, 140, 20,
						4780, 5350, 200, 20,  4780, 5100, 20, 250,   4620, 5100, 180, 20,   4620, 5100, 20, 200,
						4500, 5290, 140, 20,];

	this.keys_end_info_ = [4850, 4730];
	this.door_end_info_ = [4535, 5285, 70, 30];


	this.walls_info =  [4500, 5000, 300, 20,  4500, 5000, 20, 300,   4780, 4850, 20, 150,   4900, 4850, 20, 150,
						];

	this.keys_end_info = [4850, 4730,  4800, 4760,  4850, 4730,  4800, 4760];
	this.door_end_info = [4535, 5285, 70, 30];

	this.doors_steel_info = [4605, 5295, 70, 30, 2, 1,   4705, 5295, 70, 30, 2, 3,    4805, 5295, 70, 30, 2, 5];
	this.keys_steel_info = [4655, 5205, 4655, 5255, ];
	this.button_info = [4655, 5395, 3, 1,   4755, 5395, 2, 3];

	this.activator_info = [5200, 5000, 2, 5];

	this.speer_boxes_info = [5100, 4900, 300, 3,    5045, 4900, 300, 3];
	this.speer_umleit_info = [5100, 5000, 3,    5045, 5050, 3];
	this.boxes_info = [5150, 4900,  5150, 4800, ];

	this.telebs_info = []; //[5000, 4900,  4850, 4700]
	this.teleps_info = [5000, 4900,  4850, 4700];

	this.stoneT_info = [4800, 4900,  4850, 5200, 4850, 4900, 4900, 4900,];


	this.walls = [];
	this.keys_end = [];
	this.door_end = [];
	this.doors_steel = [];
	this.keys_steel = [];

	this.level = [];

	this.speers = [];
	this.umleiter = [];
	this.boxes = [];

	this.teleps = [];
	this.telebs = [];

	this.activator = [];

	for( i = 0; i < this.door_end_info.length/4; i++)  {
		this.level.push(new Door_End(this.door_end_info[j],this.door_end_info[j+1],this.door_end_info[j+2],this.door_end_info[j+3]));
		j += 4;
	}
	j = 0;

	for( i = 0; i < this.walls_info.length/4; i++)  {
		this.level.push(new Wall(this.walls_info[j],this.walls_info[j+1],this.walls_info[j+2],this.walls_info[j+3]));
		this.walls.push(new Wall(this.walls_info[j],this.walls_info[j+1],this.walls_info[j+2],this.walls_info[j+3]));
		j += 4;
	}
	j = 0;

	for(i=0; i < this.keys_end_info.length/2; i++) {
		this.level.push(new Key_End(this.keys_end_info[j], this.keys_end_info[j+1]));
		j += 2;
	}
	j = 0;

	for(i=0; i < this.button_info.length/4; i++) {
		this.level.push(new Button(this.button_info[j], this.button_info[j+1], this.button_info[j+2], this.button_info[j+3]));
		j += 4;
	}
	j = 0;

	for(i=0; i < this.activator_info.length/4; i++) {
		this.activator.push(new Activator(this.activator_info[j], this.activator_info[j+1], this.activator_info[j+2], this.activator_info[j+3]));
		j += 4;
	}
	j = 0;

	for(i=0; i < this.keys_steel_info.length/2; i++) {
		this.level.push(new Key_Steel(this.keys_steel_info[j], this.keys_steel_info[j+1]));
		j += 2;
	}
	j = 0;

	for(i=0; i < this.doors_steel_info.length/6; i++) {
		this.level.push(new Door_Steel(this.doors_steel_info[j], this.doors_steel_info[j+1], this.doors_steel_info[j+2], this.doors_steel_info[j+3], this.doors_steel_info[j+4], this.doors_steel_info[j+5]));
		j += 6;
	}
	j = 0;

	for( i = 0; i < this.speer_boxes_info.length/4; i++)  {
		this.level.push(new Speer_box(this.speer_boxes_info[j],this.speer_boxes_info[j+1],this.speer_boxes_info[j+2],this.speer_boxes_info[j+3]));
		j += 4;
	}
	j = 0;

	for( i = 0; i < this.speer_umleit_info.length/3; i++)  {
		this.umleiter.push(new Umleiter(this.speer_umleit_info[j],this.speer_umleit_info[j+1],this.speer_umleit_info[j+2]));
		this.umleiter[i].getVelocity();
		j += 3;
	}
	j = 0;

	for( i = 0; i < this.boxes_info.length/2; i++)  {

		this.boxes.push(new Box(this.boxes_info[j],this.boxes_info[j+1]));

		j += 2;
	}
	j = 0;

	for( i = 0; i < this.teleps_info.length/4; i++)  {

		this.teleps.push(new TeleporterP(this.teleps_info[j],this.teleps_info[j+1], this.teleps_info[j+2],this.teleps_info[j+3]));

		j += 4;
	}
	j = 0;

	for( i = 0; i < this.telebs_info.length/4; i++)  {

		this.telebs.push(new TeleporterB(this.telebs_info[j],this.telebs_info[j+1], this.telebs_info[j+2],this.telebs_info[j+3]));

		j += 4;
	}
	j = 0;

	for( i = 0; i < this.stoneT_info.length/2; i++)  {

		this.level.push(new DropStone(this.stoneT_info[j],this.stoneT_info[j+1]));

		j += 2;
	}
	j = 0;

// ################################################################


	this.update = function() {

		for(i=0; i<this.level.length; i++){
			this.level[i].update();
		}

		for(i = 0; i < this.speers.length; i++) {
			this.speers[i].update();
		}

		for(i = 0; i < this.teleps.length; i++) {
			this.teleps[i].update();
		}

		for(i = 0; i < this.telebs.length; i++) {
			this.telebs[i].update();
		}

		for(i = 0; i < this.umleiter.length; i++) {
			this.umleiter[i].update();
		}

		for(i = 0; i < this.boxes.length; i++) {
			this.boxes[i].update();
		}

		for(i = 0; i < this.activator.length; i++) {
			this.activator[i].update();
		}

	}

	this.render = function() {

		for(i=0; i<this.level.length; i++){
			this.level[i].render();
		}

		for(i = 0; i < this.speers.length; i++) {
			this.speers[i].render();
		}

		for(i = 0; i < this.teleps.length; i++) {
			this.teleps[i].render();
		}

		for(i = 0; i < this.telebs.length; i++) {
			this.telebs[i].render();
		}

		for(i = 0; i < this.umleiter.length; i++) {
			this.umleiter[i].render();
		}

		for(i = 0; i < this.boxes.length; i++) {
			this.boxes[i].render();
		}

		for(i = 0; i < this.activator.length; i++) {
			this.activator[i].render();
		}


		translate(this.position.x, this.position.y);

	}

}

function LevelUpDate() {

	game.level.loadetLevel += 1;

	game.level.walls = [];
	game.level.keys_end = [];
	game.level.door_end = [];

	console.log("Level: " + game.level.loadetLevel);


	// ################    1    ##########
	var j = 0;

	if(game.level.loadetLevel == 1) {

		for( i = 0; i < game.level.walls_info2.length/4; i++)  {

			game.level.walls.push(new Wall(game.level.walls_info2[j],game.level.walls_info2[j+1],game.level.walls_info2[j+2],game.level.walls_info2[j+3]));

			j += 4;
		}
		j = 0;

		for( i = 0; i < game.level.door_end_info2.length/4; i++)  {

			game.level.door_end.push(new Door_End(game.level.door_end_info2[j],game.level.door_end_info2[j+1],game.level.door_end_info2[j+2],game.level.door_end_info2[j+3]));

			j += 4;
		}
		j = 0;

		for(i=0; i < game.level.keys_end_info2.length/2; i++) {

			game.level.keys_end.push(new Key_End(game.level.keys_end_info2[j], game.level.keys_end_info2[j+1]));

			j += 2;
		}
		j = 0;


	}


	this.reset = createVector(5000,5000);
	game.player.position = this.reset;

	return true;
}
