import hitTest from '../hit-test';

export default (food, abs) => {
	let result = {food, abs};
	let hits = hitTest(abs[0], food);
	let hitFoods;

	if(hits.length > 0){
		food = [...food];
		// Remove the hits
		hits.forEach(hit => {
			hitFoods = food.splice(hit);
		});

		result.food = food;

		// Add to snake
		result.abs = [...abs, {color: hitFoods[0].color}];
	}

	return result;
}
