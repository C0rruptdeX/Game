

function setNewLevel(nr) {

  var levelNummber = nr;

  if(levelNummber == 0) {
    game.level.walls_info =  [4500, 5000, 300, 20,  4500, 5000, 20, 300,   4780, 4850, 20, 150,   4900, 4850, 20, 150,
  						4780, 4700, 20, 150,  4900, 4700, 20, 150,   4800, 4700, 120, 20,   4900, 5000, 20, 150,
  						4900, 4900, 150, 20,  5100, 5000, 20, 150,   5100, 4900, 20, 150,   4950, 4900, 150, 20,
  						4850, 4900, 150, 20,  4900, 5100, 130, 20,   5100, 5130, 20, 130,   5000, 5180, 120, 20,
  						5100, 5200, 20, 150,  4900, 5130, 20, 150,   4900, 5260, 130, 20,   4980, 5350, 140, 20,
  						4780, 5350, 200, 20,  4780, 5100, 20, 250,   4620, 5100, 180, 20,   4620, 5100, 20, 200,
  						4500, 5290, 140, 20,];

  	game.level.keys_end_info = [4850, 4730];
  	game.level.door_end_info = [4535, 5285, 70, 30];

  	game.level.floor_info = [4800, 4901, 310, 450,   4800, 4701, 100, 200,   4501, 5000, 120, 300,      4501, 5000, 420, 100];

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
  }

  if(levelNummber == 1) {
    game.level.walls_info =  [];

  	game.level.floor_info = [];

  	game.level.keys_end_info = [4850, 4730];
  	game.level.door_end_info = [4535, 5285, 70, 30];

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
  }







}
