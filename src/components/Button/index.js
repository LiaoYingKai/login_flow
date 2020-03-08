import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

const PREFIX_CLASS = 'button';

const TypeEnums = {
	LARGE: 'large',
	MEDIUM: 'medium',
};

const propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.oneOf(Object.values(TypeEnums)),
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]),
};

const defaultProps = {
	onClick: () => {},
	type: TypeEnums.MEDIUM,
};

function Button({ className, children, onClick, type }) {
	return (
		<button
			className={cx(
				className,
				PREFIX_CLASS,
				[`${PREFIX_CLASS}__${type}`],
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
