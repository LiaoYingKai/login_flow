import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

const propTypes = {
	onChange: PropTypes.func,
	className: PropTypes.string,
	value: PropTypes.bool,
};

const defaultProps = {
	onChange: () => {},
};

function Checkbox({
	value,
	onChange,
	className
}) {
	return (
		<div className={cx("checkbox", className)}>
			<input
				type="checkbox"
				id="checkbox"
				onChange={onChange}
				value={value}
			/>
			<label htmlFor="checkbox"></label>
		</div>
	);
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
