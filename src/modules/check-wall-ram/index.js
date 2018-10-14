export default (abs, width, height) => {
	let face = abs[0];
	if( face.x > width ){
		face.x = 0;
	} else if ( face.x < 0) {
		face.x = width;
	} else if (face.y > height) {
		face.y = 0;
	} else if (face.y < 0) {
		face.y = height;
	}

	return abs;
}
