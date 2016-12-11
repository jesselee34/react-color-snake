import React from 'react';
import {connect} from 'react-redux';
import Piece from './piece';

const Food = ({food}) => {
	return (
		<div>
			{
				food.map((f, i) => {
					return <Piece key={i} x={f.x} y={f.y} color={f.color} />;
				})
			}
		</div>
	);
}

const mapper = (state) => {
	return {
		food: state.food
	}
};

export default connect(mapper)(Food);
