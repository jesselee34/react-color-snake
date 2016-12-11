import React from 'react';
import {connect} from 'react-redux';

const Dash = ({number}) => {
	return (
		<div>Frame Number: {number}</div>
	);
};

Dash.contextTypes = {
	store: React.PropTypes.object
};

let mapper = (state) => {
	return {
		number: state.frame.number
	};
}

export default connect(mapper)(Dash);