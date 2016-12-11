import React from 'react';
import {connect} from 'react-redux';
import Styles from './styles';

const Snake = ({frame, abs}) => {
	return (
		<div>
			{
				abs.map((ab, index, abs) => {
					let styles = {
						...Styles.abs,

						left: (ab.x * 10) + 'px',
						top: (ab.y * 10) + 'px',

						background: ab.color || 'black'
					};
					return (
						<div key={index} style={styles}></div>
					);
				})
			}
		</div>
	);
};

Snake.contextTypes = {
	store: React.PropTypes.object
};

let mapper = (state) => {
	return {
		abs: state.snake.abs
	};
}

export default connect(mapper)(Snake);
