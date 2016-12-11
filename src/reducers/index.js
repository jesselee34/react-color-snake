export default (state = {}, action) => {
	switch(action.type){
		case 'DRAW':
			return Object.assign({}, state, action.frame);
		default:
			return state;
	}
};
