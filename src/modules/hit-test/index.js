export default (point, arr) => {
	let result = [];

	arr.forEach((p, i) => {
		if(point.x === p.x && point.y === p.y){
			result.push(i);
		}
	});

	return result;
};
