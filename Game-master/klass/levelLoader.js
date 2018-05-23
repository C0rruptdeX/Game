function LevelLoader(x,y) {

	this.position = createVector(x,y);
	var j = 0;
	this.loadetLevel = -1;
	this.help = 0;

	this.atStart = true;

	//    x l/r , y u/d , w , h

	this.walls_info =  [];

	this.keys_end_info = [];
	this.door_end_info = [];

	this.floor_info = [];

	this.doors_steel_info = [];
	this.keys_steel_info = [];
	this.button_info = [];

	this.activator_info = [];

	this.speer_boxes_info = [];
	this.speer_umleit_info = [];
	this.boxes_info = [];

	this.telebs_info = [];
	this.teleps_info = [];

	this.stoneT_info = [];


  /*  ############ test level ##########

	this.walls_info =  [4500, 5000, 300, 20,  4500, 5000, 20, 300,   4780, 4850, 20, 150,   4900, 4850, 20, 150,
						];

	this.floor_info = [4750, 4900, 500, 500];

	this.keys_end_info = [4850, 4730,  4800, 4760,  4850, 4730,  4800, 4760];
	this.door_end_info = [4535, 5285, 70, 30];

	this.doors_steel_info = [4605, 5295, 70, 30, 2, 1,   4705, 5295, 70, 30, 2, 3,    4805, 5295, 70, 30, 2, 5];
	this.keys_steel_info = [4655, 5205, 4655, 5255, ];
	this.button_info = [4655, 5395, 3, 1,   4755, 5395, 2, 3];

	this.activator_info = [5200, 5000, 2, 5];

	this.speer_boxes_info = [5100, 4900, 300, 3,    5045, 4900, 300, 3];
	this.speer_umleit_info = [5100, 5000, 3,    5045, 5050, 3,   5305, 5050, 3];
	this.boxes_info = [5150, 4900,  5150, 4800, ];

	this.telebs_info = []; //[5000, 4900,  4850, 4700]
	this.teleps_info = [5000, 4900,  4850, 4700];

	this.stoneT_info = [4800, 4900,  4850, 5200, 4850, 4900, 4900, 4900,];
 */

	this.walls = [];
	this.floors = [];

	this.level = [];

	this.speers = [];
	this.umleiter = [];
	this.boxes = [];

	this.teleps = [];
	this.telebs = [];

	this.activator = [];

	/*
	for( i = 0; i < this.floor_info.length/4; i++)  {
		this.floors.push(new Floor(this.floor_info[j],this.floor_info[j+1],this.floor_info[j+2],this.floor_info[j+3]));
		j += 4;
	}
	j = 0;

	for( i = 0; i < this.walls_info.length/4; i++)  {
		this.level.push(new Wall(this.walls_info[j],this.walls_info[j+1],this.walls_info[j+2],this.walls_info[j+3]));
		this.walls.push(new Wall(this.walls_info[j],this.walls_info[j+1],this.walls_info[j+2],this.walls_info[j+3]));
		j += 4;
	}
	j = 0;

	for( i = 0; i < this.door_end_info.length/4; i++)  {
		this.level.push(new Door_End(this.door_end_info[j],this.door_end_info[j+1],this.door_end_info[j+2],this.door_end_info[j+3]));
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

	*/

// ################################################################


	this.update = function() {

		if(this.atStart) {
			LevelUpDate(false);
			this.atStart = false;
		}

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

		for(i=0; i<this.floors.length; i++){
			this.floors[i].render();
		}

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



function LevelUpDate(trueReset) {

	game.level.walls_info =  [];

	game.level.floor_info = [];

	game.level.keys_end_info = [];
	game.level.door_end_info = [];

	game.level.doors_steel_info = [];
	game.level.keys_steel_info = [];
	game.level.button_info = [];

	game.level.activator_info = [];

	game.level.speer_boxes_info = [];
	game.level.speer_umleit_info = [];
	game.level.boxes_info = [];

	game.level.telebs_info = [];
	game.level.teleps_info = [];

	game.level.stoneT_info = [];


	game.level.walls = [];
	game.level.floors = [];

	game.level.level = [];

	game.level.speers = [];
	game.level.umleiter = [];
	game.level.boxes = [];

	game.level.teleps = [];
	game.level.telebs = [];

	game.level.activator = [];

	if(!trueReset) {
		game.level.loadetLevel++;
	}

	setNewLevel(game.level.loadetLevel);

	var j = 0;

	for( i = 0; i < game.level.floor_info.length/4; i++)  {
		game.level.floors.push(new Floor(game.level.floor_info[j],game.level.floor_info[j+1],game.level.floor_info[j+2],game.level.floor_info[j+3]));
		j += 4;
	}
	j = 0;

	for( i = 0; i < game.level.walls_info.length/4; i++)  {
		game.level.level.push(new Wall(game.level.walls_info[j],game.level.walls_info[j+1],game.level.walls_info[j+2],game.level.walls_info[j+3]));
		game.level.walls.push(new Wall(game.level.walls_info[j],game.level.walls_info[j+1],game.level.walls_info[j+2],game.level.walls_info[j+3]));
		j += 4;
	}
	j = 0;

	for( i = 0; i < game.level.door_end_info.length/4; i++)  {
		game.level.level.push(new Door_End(game.level.door_end_info[j],game.level.door_end_info[j+1],game.level.door_end_info[j+2],game.level.door_end_info[j+3]));
		j += 4;
	}
	j = 0;

	for(i=0; i < game.level.keys_end_info.length/2; i++) {
		game.level.level.push(new Key_End(game.level.keys_end_info[j], game.level.keys_end_info[j+1]));
		j += 2;
	}
	j = 0;

	for(i=0; i < game.level.button_info.length/4; i++) {
		game.level.level.push(new Button(game.level.button_info[j], game.level.button_info[j+1], game.level.button_info[j+2], game.level.button_info[j+3]));
		j += 4;
	}
	j = 0;

	for(i=0; i < game.level.activator_info.length/4; i++) {
		game.level.activator.push(new Activator(game.level.activator_info[j], game.level.activator_info[j+1], game.level.activator_info[j+2], game.level.activator_info[j+3]));
		j += 4;
	}
	j = 0;

	for(i=0; i < game.level.keys_steel_info.length/2; i++) {
		game.level.level.push(new Key_Steel(game.level.keys_steel_info[j], game.level.keys_steel_info[j+1]));
		j += 2;
	}
	j = 0;

	for(i=0; i < game.level.doors_steel_info.length/6; i++) {
		game.level.level.push(new Door_Steel(game.level.doors_steel_info[j], game.level.doors_steel_info[j+1], game.level.doors_steel_info[j+2], game.level.doors_steel_info[j+3], game.level.doors_steel_info[j+4], game.level.doors_steel_info[j+5]));
		j += 6;
	}
	j = 0;

	for( i = 0; i < game.level.speer_boxes_info.length/4; i++)  {
		game.level.level.push(new Speer_box(game.level.speer_boxes_info[j],game.level.speer_boxes_info[j+1],game.level.speer_boxes_info[j+2],game.level.speer_boxes_info[j+3]));
		j += 4;
	}
	j = 0;

	for( i = 0; i < game.level.speer_umleit_info.length/3; i++)  {
		game.level.umleiter.push(new Umleiter(game.level.speer_umleit_info[j],game.level.speer_umleit_info[j+1],game.level.speer_umleit_info[j+2]));
		game.level.umleiter[i].getVelocity();
		j += 3;
	}
	j = 0;

	for( i = 0; i < game.level.boxes_info.length/2; i++)  {

		game.level.boxes.push(new Box(game.level.boxes_info[j],game.level.boxes_info[j+1]));

		j += 2;
	}
	j = 0;

	for( i = 0; i < game.level.teleps_info.length/4; i++)  {

		game.level.teleps.push(new TeleporterP(game.level.teleps_info[j],game.level.teleps_info[j+1], game.level.teleps_info[j+2],game.level.teleps_info[j+3]));

		j += 4;
	}
	j = 0;

	for( i = 0; i < game.level.telebs_info.length/4; i++)  {

		game.level.telebs.push(new TeleporterB(game.level.telebs_info[j],game.level.telebs_info[j+1], game.level.telebs_info[j+2],game.level.telebs_info[j+3]));

		j += 4;
	}
	j = 0;

	for( i = 0; i < game.level.stoneT_info.length/2; i++)  {

		game.level.level.push(new DropStone(game.level.stoneT_info[j],game.level.stoneT_info[j+1]));

		j += 2;
	}
	j = 0;

	this.reset = createVector(5000,5000);
	game.player.position = this.reset;

	return true;
}
