import React from 'react';
import Styles from './styles';

export default ({x, y, color}) => {
	let styles = {
		...Styles,

		top: `${y*10}px`,
		left: `${x*10}px`,
		background: color || 'blue'
	};
	return (
		<div style={styles}></div>
	);
};
