import React, { Component, PropTypes } from 'react';
import './App.css';
import Snake from './components/snake';
import Food from './components/food';

import updateFrameNumber from './modules/update-frame-number';
import {updateSnakeAbs} from './modules/update-snake';
import {handleKeyboard} from './modules/handlers';
import updateFood from './modules/update-food';
import getBoardDimentions from './modules/get-dimentions';
import checkFoodEat from './modules/check-food-eat';
import checkWallRam from './modules/check-wall-ram';

const draw = (store, frame) => {
	const state = store.getState();

	// Increment frame
	frame.frame = updateFrameNumber(state.frame);

	// If the game isn't paused.
	if(!frame.pause) {

		if ( frame.frame % 3 === 0 ) {
			// update snake abs
			frame.snake.abs = updateSnakeAbs(state.snake);
			// update Food
			frame.food = updateFood(frame.food, state.board);

			let {food, abs} = checkFoodEat(frame.food, frame.snake.abs);

			//teleport the snake if it goes off screen.
			abs = checkWallRam(abs, frame.board.width, frame.board.height);

			frame.food = food;
			frame.snake.abs = abs;
		}
	}

	store.dispatch({type: 'DRAW', frame});
};

const App = ({frame, food}) => {
	return {
		...Component.prototype,

		componentWillMount () {
			let {store} = this.context;
			let {frame} = this.props;

			frame.board = getBoardDimentions();

			// Start the game loop.
			let loop = setInterval(draw, 1000/60, store, frame); // 60 fps

			// Kick it off
			draw(store, frame);

			// Bind keyboard events
			window.addEventListener('keydown', (e) => handleKeyboard(e, frame), false);

			// Bind window resize events
			window.addEventListener('resize', (e) => frame.board = getBoardDimentions(), false);
		},

		componentWillUnmount () {
			window.removeEventListener('keyup');
			window.removeEventListener('resize');
		},

		render () {
			return (
				<div>
					<Snake />
					<Food />
				</div>
			);
		}
	}
};

App.contextTypes = {
	store: PropTypes.object
};

export default App;
