

function setNewLevel() {

  if(game.level.loadetLevel == 0) {
    game.level.walls_info =  [4500, 5000, 300, 20,  4500, 5000, 20, 300,   4780, 4850, 20, 150,   4900, 4850, 20, 150,
  						4780, 4700, 20, 150,  4900, 4700, 20, 150,   4800, 4700, 120, 20,   4900, 5000, 20, 150,
  						4900, 4900, 150, 20,  5100, 5000, 20, 150,   5100, 4900, 20, 150,   4950, 4900, 150, 20,
  						4850, 4900, 150, 20,  4900, 5100, 130, 20,   5100, 5130, 20, 130,   5000, 5180, 120, 20,
  						5100, 5200, 20, 150,  4900, 5130, 20, 150,   4900, 5260, 130, 20,   4980, 5350, 140, 20,
  						4780, 5350, 200, 20,  4780, 5100, 20, 250,   4620, 5100, 180, 20,   4620, 5100, 20, 200,
  						4500, 5290, 140, 20,];

    game.level.magie_info = [];
  	game.level.doors_hard_info = [];

  	game.level.keys_end_info = [4850, 4730];
  	game.level.door_end_info = [4535, 5285, 70, 30];

  	game.level.floor_info = [4800, 4901, 310, 450,   4800, 4702, 100, 220,   4501, 5001, 120, 300,      4502, 5001, 410, 110];

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

  }else if(game.level.loadetLevel == 1) {
    game.level.walls_info =  [4900, 4600, 20, 300,   4900, 4900, 300, 20,    5200, 4620, 20, 300,      4920, 4600, 300, 20,    4600, 5100, 700, 20,    5300, 4500, 20, 620,
                              4800, 4600, 20, 300,   4600, 4500, 700, 20,    4600, 4600, 200, 20,      4600, 4500, 20, 100,    4500, 4900, 320, 20,    4600, 5100, 20, 210,
                              4480, 5100, 20, 200,   4480, 5300, 140, 20,    4380, 5100, 120, 20,      4380, 4700, 20, 400,    4500, 4700, 20, 200,    4380, 4700, 140, 20,];

  	game.level.floor_info = [4801, 4590, 110, 350,   4601, 4505, 700, 110,   5201, 4590, 110, 350,     4395, 4905, 910, 210,   4395, 4705, 110, 210,   4495, 5100, 110, 210,];

    game.level.magie_info = [];
  	game.level.doors_hard_info = [];

  	game.level.keys_end_info = [4650, 4550];
  	game.level.door_end_info = [4515, 5295, 70, 30];

  	game.level.doors_steel_info = [5000, 4520, 30, 80, 1, 2];
  	game.level.keys_steel_info = [];
  	game.level.button_info = [4435, 4730, 1, 2,];

  	game.level.activator_info = [];

  	game.level.speer_boxes_info = [];
  	game.level.speer_umleit_info = [];
  	game.level.boxes_info = [];

  	game.level.telebs_info = [];
  	game.level.teleps_info = [];

  	game.level.stoneT_info = [4520, 5100,  4570, 5140, 4900, 5000,    4840, 4700,  4870, 4720,  4860, 4670,];

  }else if(game.level.loadetLevel == 2) {
    game.level.walls_info =  [4900, 5100, 270, 20,   4900, 4850, 20, 270,   5150, 4850, 20, 260,   5040, 4850, 270, 20,   4920, 4850, 40, 20,
                              5300, 4680, 20, 190,   4900, 4790, 20, 80,    4800, 4790, 100, 20,   4800, 4690, 20, 100,   4800, 4680, 500, 20,
                              6440, 4330, 20, 700,   6440, 5030, 200, 20,   6640, 4841, 20, 209,   6445, 4850, 90, 20,    6613, 4850, 300, 20,
                              6640, 4479, 20, 280,   6893, 4660, 20, 200,   6553, 4660, 350, 20,   6773, 4660, 20, 90,    6450, 4660, 22, 20,
                              6660, 4479, 240, 20,   6440, 4330, 250, 20,   6680, 4230, 20, 120,   6680, 4230, 121, 20,   6800, 4230, 20, 120,
                              6800, 4330, 120, 20,   6900, 4330, 20, 170,   6640, 4451, 20, 120,   6640, 4340, 20, 30,    6695, 4330, 14, 20,
                              6791, 4330, 13, 20,    2900, 2800, 20, 251,   3150, 2800, 20, 251,   2900, 2800, 250, 20,   2900, 3050, 270, 20,];

  	game.level.floor_info = [4902, 4790, 265, 310,   4812, 4690, 365, 100,   5112, 4690, 190, 180,    6442, 4330, 200, 702,    6652, 4330, 250, 160,   6652, 4680, 250, 175,
                             6682, 4250, 130, 160,   2902, 2800, 253, 251,];

    game.level.magie_info = [];
   	game.level.doors_hard_info = [];

  	game.level.keys_end_info = [6490, 4810,];
  	game.level.door_end_info = [6715, 4225, 70, 30];

  	game.level.doors_steel_info = [4960, 4845, 80, 30, 0, 0,  6534, 4845, 80, 30, 1, 2,  6635, 4760, 30, 80, 0, 0,  6473, 4655, 80, 30, 1, 3,   6635, 4370, 30, 80,  1, 4,
                                   6710, 4325, 80, 30, 1, 5,];
  	game.level.keys_steel_info = [];
  	game.level.button_info = [5235, 4780, 1, 2,   6830, 4690, 3, 3,    6590, 4620, 3, 4,    3030, 2850, 2, 5];

  	game.level.activator_info = [];

  	game.level.speer_boxes_info = [];
  	game.level.speer_umleit_info = [];
  	game.level.boxes_info = [4840, 4730,  6700, 4690,];

  	game.level.telebs_info = [];
  	game.level.teleps_info = [5100, 4930, 6500, 4970,    6870, 4380, 3000, 3000,    3080, 3000, 6495, 4390];

  	game.level.stoneT_info = [];

  }else if(game.level.loadetLevel == 3) {
    game.level.walls_info =  [4900, 5100, 270, 20,   4900, 4850, 20, 270,   ];

  	game.level.floor_info = [4902, 4790, 265, 310,   4812, 4690, 365, 100,   5112, 4690, 190, 180,    6442, 4330, 200, 702,    6652, 4330, 250, 160,   6652, 4680, 250, 175,
                             6682, 4250, 130, 160,   2902, 2800, 253, 251,];

    game.level.magie_info = [4902, 4900, 305, 500,];
   	game.level.doors_hard_info = [];

  	game.level.level.keys_end_info = [6490, 4810,];
  	game.level.level.door_end_info = [6715, 4225, 70, 30];

  	game.level.doors_steel_info = [4960, 4845, 80, 30, 0, 0,  6534, 4845, 80, 30, 1, 2,  6635, 4760, 30, 80, 0, 0,  6473, 4655, 80, 30, 1, 3,   6635, 4370, 30, 80,  1, 4,
                                   6710, 4325, 80, 30, 1, 5,];
  	game.level.keys_steel_info = [];
  	game.level.button_info = [5235, 4780, 1, 2,   6830, 4690, 3, 3,    6590, 4620, 3, 4,    3030, 2850, 2, 5];

  	game.level.activator_info = [];

  	game.level.speer_boxes_info = [];
  	game.level.speer_umleit_info = [];
  	game.level.boxes_info = [4840, 4730,  6700, 4690,];

  	game.level.telebs_info = [];
  	game.level.teleps_info = [5100, 4930, 6500, 4970,    6870, 4380, 3000, 3000,    3080, 3000, 6495, 4390];

  	game.level.stoneT_info = [];
  }







}
