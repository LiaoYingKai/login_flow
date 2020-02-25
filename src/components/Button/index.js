import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const propTypes = {};

class Button extends Component {
	render() {
		return (
			<button className="test"> button </button>
		);
	}
}

Button.propTypes = propTypes;

export default Button;
