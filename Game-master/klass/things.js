

function test_grid(grid_size, grid_density) {
	var line_distance = grid_size/grid_density;

	push();
	for(i = 0; i*line_distance <= grid_size; i++) {
		line(0,i*line_distance,grid_size,i*line_distance);
		stroke(69,69,69);
		strokeWeight(2.0);
		//translate(width/2 , height/2 );
	}

	pop();

	push();
	for(i = 0; i*line_distance <= grid_size; i++) {
		line(i*line_distance,0,i*line_distance,grid_size);
		stroke(69,69,69);
		strokeWeight(2.0);
		//translate(width/2 , height/2 );
	}

	pop();




}

function test_box(x,y) {
	push();



	fill(102, 153, 0);
	rect( x, y,50, 50);


	pop();
}
