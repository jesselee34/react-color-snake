const calculateAbPos = (dir, index, curAb, prevAbs) => {
	let pos = {
		x: curAb.x,
		y: curAb.y
	};

	if (index === 0) {
		switch(dir){
			case 'D':
				pos.y = curAb.y + 1;
				break;
			case 'U':
				pos.y = curAb.y - 1;
				break;
			case 'L':
				pos.x = curAb.x - 1;
				break;
			case 'R':
			default:
				pos.x = curAb.x + 1;
				break;
		}
	} else {
		let prevAb = prevAbs[index - 1];
		// new position will always match the previous position of the preceding ab.
		pos = {
			x: prevAb.x,
			y: prevAb.y
		};
	}

	return pos;
};

export const updateSnakeAbs = (snake) => {
	return snake.abs.map((ab, index, abs) => {
		let result = {
			...ab,
			...calculateAbPos(snake.dir, index, ab, abs),
		};

		return result;
	});
}
